import orderModel from "../models/order.model.js";
import User from "../models/user.model.js";
import Stripe from "stripe";


// global variable
const currency = 'inr';

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// ==> Placing order using COD
const placeOrder = async (req, res) => {

    // try {
    //     const { userId, items, amount } = req.body;
    
    //     const orderData = {
    //         userId,
    //         items,
    //         amount,
    //         paymentMethod: "COD",
    //         payment: true,
    //         date: Date.now()
    //     };
    
    //     const newOrder = new orderModel(orderData);
    //     await newOrder.save();
    
    //     await User.findByIdAndUpdate(userId, {cartData:{}});
    
    //     res.json({success:true, message: "Item Purchased"});
        
    // } catch (error) {

    //     console.log(error);
    //     res.json({success:false, message: error.message});
    // }
    
}

// ==> Placing order using Stripe
const placeOrderStripe = async (req, res) => {

    try {
        const { userId, items, amount } = req.body;
        const { origin } = req.headers;
    
        const orderData = {
            userId,
            items,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        };
    
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?false=true&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })
    
        // await User.findByIdAndUpdate(userId, {cartData:{}});
        // res.json({success:true, message: "Item Purchased"});

        res.json({success: true, session_url:session.url});
        
    } catch (error) {

        console.log(error);
        res.json({success:false, message: error.message});
    }

}

// Verify Stripe
const verifyStripe = async (req, res) => {

    const { orderId, success, userId } = req.body;

    try {
        
        if(success === "true") {
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            await User.findByIdAndUpdate(userId, {cartData: {}})
            res.json({success: true});
        } else {
            await orderModel.findByIdAndUpdate(orderId);
            res.json({success: false});
        }

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

        const orders = await orderModel.find({});
        res.json({ success: true, orders });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
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
        
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate( orderId, { status });

        res.json({ success: true, message: "Status Updated" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe};