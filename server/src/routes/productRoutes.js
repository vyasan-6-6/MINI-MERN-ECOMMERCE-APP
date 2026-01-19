const express = require('express');
const router = express.Router();
const   upload   = require('../config/multer');
const{createProduct,getProducts} = require("../controller/productController")

 //get all products 

 router.get("/",getProducts);

 


 //post product

 router.post("/",upload.single("image"),createProduct);


 module.exports = router;