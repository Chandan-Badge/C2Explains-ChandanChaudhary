import mongoose from "mongoose";

const main = async() => {
    mongoose.connect(`${process.env.MONGODB_URI}/c2explains`)
}

main()
    .then(() => console.log("DB Connection Successful..."))
    .catch((err) => console.log("ERROR -", err));

export default main;