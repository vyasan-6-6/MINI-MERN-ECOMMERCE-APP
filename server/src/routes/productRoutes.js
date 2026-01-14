const express = require('express');
const router = express.Router();
const Product = require("../model/productModel");

 //get all products 

 router.get("/",async(req,res)=>{
    try {
        const products = Product.find();
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

 router.post("/",async(req,res)=>{
    try {
        const product  = new Product(req.body);
        const saveProduct = await  product.save();
    } catch (error) {
        res.status(400).json({message:error.message})
    }
 });


 module.exports = router;