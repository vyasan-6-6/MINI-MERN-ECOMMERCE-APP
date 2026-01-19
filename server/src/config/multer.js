const multer = require("multer")

// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}${path.extname(file.originalname)}`);
//   },
// });

// export const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith("image/")) cb(null, true);
//     else cb(new Error("Only images allowed"));
//   },
// });


const storage = multer.memoryStorage();

const upload = multer({
  storage,fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only images allowed"));
  },limits: 
     { fileSize: 5 * 1024 * 1024 }, 
  
})

module.exports = upload;