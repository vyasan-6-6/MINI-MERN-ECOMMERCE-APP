const express = require('express');
const router = express.Router();
const Product = require("../model/productModel");
const { upload } = require('../config/multerConfig');

 //get all products 

 router.get("/",async(req,res)=>{
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 6 ;
        const skip = (page-1)*limit;

        const keyword = req.query.keyword ? {name:{$regex:req.query.keyword,$options:"i"}}:{};

        const category = req.query.category ? {category:req.query.category} : {};

        const sortOption = {};
        if(req.query.sort === "price_asc") sortOption.price =1;
        if(req.query.sort === "price_desc") sortOption.price =-1;

        const filter  = {...keyword,...category};

        const total =await Product.countDocuments(filter);
        const products = await Product.find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit)
        

        res.json({products,page,pages:Math.ceil(total/limit),total:total})
        
    } catch (error) {
        res.status(500).json({message:error.message});
        console.error("error from get req",error);
    }
 });


 //get single product


 router.get("/:id",async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        res.json(product)
        
    } catch (error) {
          res.status(500).json({message:error.message});
        console.error("error from get single product req",error);
    }
 });


 //post product

 router.post("/",upload.single("image"),async(req,res)=>{
    try {
        const product  = new Product({...req.body
        ,image:req.file? `/uploads/${req.file.filename}` :""
        });
      await  product.save();
res.status(201).json(product);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
 });


 module.exports = router;