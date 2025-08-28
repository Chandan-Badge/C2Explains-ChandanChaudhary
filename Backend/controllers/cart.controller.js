import userModel from "../models/user.model.js";


// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartItems || {};

        console.log(itemId);
        // cartData[itemId] = 1;
        console.log(cartData[itemId]);

        if(cartData[itemId]) {
            // if(cartData[itemId]) {
                cartData[itemId] += 1;
                // console.log("true");
                
            // }
            // else {
            //     cartData[itemId] = 1;
            // }
        } else {
            // cartData[itemId] = {};
            cartData[itemId] = 1;
            // console.log("false");
        }

        await userModel.findByIdAndUpdate(userId, { cartItems: cartData });
        console.log(userData);
        console.log(cartData);

        res.json({ success: true, message: "Added To Cart" });

        // const userData = await userModel.findById(userId);
        // if (!userData) {
        // return res.json({ success: false, message: "User not found" });
        // }
        // let cartData = userData.cartItems || {};

        // if (cartData[itemId]) {
        // cartData[itemId] += 1;
        // } else {
        // cartData[itemId] = 1;
        // }

        // await userModel.findByIdAndUpdate(userId, { $set: { cartData } });
        // console.log(userData);
        // console.log(cartData);

        // res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// update user cart
const updateCart = async (req, res) => {
    
    try {
        const { userId, itemId, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartItems;

        cartData[itemId] = quantity;

        await userModel.findByIdAndUpdate(userId, { cartItems: cartData });

        res.json({ success: true, message: "Cart updated" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

// get user cart data
const getUserCart = async (req, res) => {
    
    try {
        
        const { userId } = req.body;
    
        const userData = await userModel.findById(userId);
        let cartData = userData.cartItems;
    
        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

export {addToCart, updateCart, getUserCart};