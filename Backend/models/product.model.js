import mongoose from "mongoose";

async function main() {
    await mongoose.connect(`${process.env.MONGODB_URI}/c2explains`)
}

main()
    .then(() => console.log("Model Created"))
    .catch((err) => console.log("ERROR - ", err));

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

    bestseller: {
        type: Boolean
    },
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
// When product model is alredy avilable then that model will be used || If it is not avilable then it will create using this schema

export default Product;