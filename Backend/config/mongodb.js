import mongoose from "mongoose";

const main = async() => {
    mongoose.connect(`${process.env.MONGODB_URI}/c2explains`)
}

main()
    .then(() => console.log("DB Connection Successful..."))
    .catch((err) => console.log("MongoDB connection Error:-", err));

export default main;