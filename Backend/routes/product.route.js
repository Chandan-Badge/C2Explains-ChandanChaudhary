import express from "express";
import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.post("/list", listProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);

export default productRouter;