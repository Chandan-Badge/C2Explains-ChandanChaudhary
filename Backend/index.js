import express from "express";
import cors from "cors";
import "dotenv/config";
import main from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";

// App config
const app = express();
let port = process.env.PORT || 8080;
main();
connectCloudinary();

app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRoute);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);


app.get("/", (req, res) => {
    res.send("Server Started.");
})

app.listen(port, () => {
    console.log(`App was listen on port ${port}`);
})