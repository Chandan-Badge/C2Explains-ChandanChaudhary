import express from "express";
import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/product.controller.js";
import upload from "../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add", adminAuth, upload.fields([{ name: "image1", maxCount: 1}, {name: "image2", maxCount: 2}, {name: "image3", maxCount: 3},]), addProduct);
productRouter.post("/list", adminAuth, listProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);

export default productRouter;