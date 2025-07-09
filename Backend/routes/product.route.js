import express from "express";
import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/product.controller.js";
import upload from "../middlewares/multer.js";

const productRouter = express.Router();

productRouter.post("/add", upload.fields([{ name: "image1", maxCount: 1}, {name: "image2", maxCount: 2}, {name: "image3", maxCount: 3},]), addProduct);
productRouter.post("/list", listProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);

export default productRouter;