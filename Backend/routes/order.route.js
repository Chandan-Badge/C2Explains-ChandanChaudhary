import express, { Router } from "express";
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from "../controllers/order.controller";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("list", adminAuth, allOrders);
orderRouter.post("status", adminAuth, updateStatus);