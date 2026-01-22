 
 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes"); 
  

const app = express();
const PORT = process.env.PORT || 5000;
 
connectDB();


// Middleware
const allowOrigins = [
"https://mini-mern-ecommerce-app.vercel.app/",
"   http://localhost:5173/"

];

app.use(cors({
origin:function(origin,callback){
  if(!origin) return callback(null,true);
  if(allowOrigins.includes(origin)){
    callback(null,true);
  }else{
    callback(new Error("Not allowed by CORS"));
  }
},
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

//serve images

app.use("/uploads",express.static("uploads"))

 
app.use("/api/products",productRoutes)
 
app.listen(PORT, () => {
  console.log( `Server running on port ${PORT}`);
});
 