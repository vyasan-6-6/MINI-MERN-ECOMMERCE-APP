const cloudinary = require("../config/cloudinary");
const Product = require("../model/productModel")

//get all products 

const getProducts = async (req,res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 6;
        const skip = (page-1) * limit;
        
       const keyword =  typeof req.query.keyword === "string" && req.query.keyword.trim()
  ? { name: { $regex: req.query.keyword, $options: "i" } }
  : {};

        const category = typeof req.query.category ==="string" && req.query.category.trim() 
        ? {category:req.query.category}: {};

        let sortOption = {createdAt:-1};
        if(req.query.sort === "price_asc")  sortOption = {price:1};
        if(req.query.sort === "price_desc")  sortOption = {price:-1};

        const filter = {...keyword,...category};

        const total =  await Product.countDocuments(filter);

        const products = await Product.find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit);

        res.json({
            products,
            page,
            pages:Math.ceil(total/limit),
            total
        });
        

    } catch (error) {
  console.error("🔥 GET PRODUCTS ERROR:", error);
  res.status(500).json({ message: error.message });
}

};

const createProduct = async (req,res) => {
    try {
        let imageUrl = "";
        if (!req.file) {
  return res.status(400).json({ message: "Image is required" });
}

        const {name} = req.body;
        if(!name || !name.trim()){
            return res.status(400).json({ message: "Product name is required" });
        }
     const normaliseName = name.trim();


        const existingProduct = await Product.findOne({
            name: new RegExp(`^${normaliseName}$`,"i")
        });

        if(existingProduct){
            return res.status(400).json({
        message: "Product with this name already exists",
      });
        }

         

        if(req.file){
            const uploadResult = await new Promise((resolve,reject)=>{
                cloudinary.uploader.upload_stream(
                    {folder:"products"}
                    ,
                    (error,result)=>{
                        if(error) reject(error);
                        else resolve(result);
                    }
                ).end(req.file.buffer);
            });
            imageUrl = uploadResult.secure_url
        }
         
      const product = await Product.create({
        ...req.body,image:imageUrl,
       name:normaliseName,
      })

        await product.save();
        console.log(req.body);
console.log("file",req.file);



        res.status(201).json(product)
    } catch (error) {
        // 🔥 Mongo unique index safety
        if(error.code ===11000){
            return res.status(400).json({
    message: "Product name must be unique",
  });
        }
  console.error("🔥 CREATE PRODUCT ERROR:", error);
  res.status(500).json({ message: error.message });
}

}





module.exports ={getProducts,createProduct}