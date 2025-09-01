import orderModel from "../models/order.model.js";
import User from "../models/user.model.js";


// ==> Placing order using COD
const placeOrder = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
    
}

// ==> Placing order using Stripe
const placeOrderStripe = async (req, res) => {

    try {
        const { userId, items, amount } = req.body;
    
        const orderData = {
            userId,
            items,
            amount,
            paymentMethod: "POS",
            payment: true,
            date: Date.now()
        };
    
        const newOrder = new orderModel(orderData);
        await newOrder.save();
    
        await User.findByIdAndUpdate(userId, {cartData:{}});
    
        res.json({success:true, message: "Item Purchased"});
        
    } catch (error) {

        console.log(error);
        res.json({success:false, message: error.message});
    }

}

// ==> Placing order using Razorpay
const placeOrderRazorpay = async (req, res) => {
    
    try {
        
    } catch (error) {
        
    }

}

// ==> All orders data for Admin Panel
const allOrders = async (req, res) => {
        
    try {
        
    } catch (error) {
        
    }
    
}

// ==> User order data for frontend
const userOrders = async (req, res) => {
        
    try {
        
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });

        res.json({ success: true, orders });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
    
}

// ==> Admin update the order status
const updateStatus = async (req, res) => {
        
    try {
        
    } catch (error) {
        
    }
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};