const express = require('express');
const router = express.Router();
const Product = require("../model/productModel");
const { upload } = require('../config/multerConfig');

 //get all products 

 router.get("/",async(req,res)=>{
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
        console.error("error from get req",error);
    }
 });


 //get single product


 router.get("/:id",async(req,res)=>{
    try {
        const product = Product.findById(req.params.id);
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

 router.post("/",upload.array("image"),async(req,res)=>{
    try {
        const product  = new Product({...req.body
        ,image:req.file? `/uploads/${req.file.filename}` :""
        });
      await  product.save();
      res.json(product)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
 });


 module.exports = router;