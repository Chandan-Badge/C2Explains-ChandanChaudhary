import orderModel from "../models/order.model.js"


// ==> Placing order using COD
const placeOrder = async () => {

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
    
        await userModel.findByIdAndUpdate(userId, {cartData:{}});
    
        res.json({success:true, message: "Item Purchased"});
        
    } catch (error) {

        console.log(error);
        res.json({success:false, message: error.message});
    }

}

// ==> Placing order using Razorpay
const placeOrderRazorpay = async () => {
    
    try {
        
    } catch (error) {
        
    }

}

// ==> All orders data for Admin Panel
const allOrders = async () => {
        
    try {
        
    } catch (error) {
        
    }
    
}

// ==> User order data for frontend
const userOrders = async () => {
        
    try {
        
    } catch (error) {
        
    }
    
}

// ==> Admin update the order status
const updateStatus = async () => {
        
    try {
        
    } catch (error) {
        
    }
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};