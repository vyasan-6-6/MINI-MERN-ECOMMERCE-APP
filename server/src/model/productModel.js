const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
            unique:true,
        },
        description: {
            type: String,
            required: [true, "Product description is required"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price cannot be negative"],
        },
        rating: {
            type: Number,
            default: 0,
            min: [0, "rating cannot be less than zero"],
            max: [5, "rating cannot be more than 5"],
        },
        numReviews: {
            type: Number,
            default: 0,
            min: [0, "number of reviews cannot be negative"
],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        image: {
            type: String,
            required: [true, "Product image is required"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);
