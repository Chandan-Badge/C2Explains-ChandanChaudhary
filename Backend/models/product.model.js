import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: Array,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    subCategory: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    bestSeller: {
        type: Boolean
    },
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
// When product model is alredy avilable then that model will be used || If it is not avilable then it will create using this schema

export default Product;