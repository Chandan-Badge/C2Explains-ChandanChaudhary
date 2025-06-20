import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

    const ShopContextProvider = (probs) => {

    const currency = '₹';

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [searchBtn, setSearchBtn] = useState(true);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]) {
            // if(cartData[itemId]) {
            //     cartData[itemId] += 1;
            // }
            // else {
            //     cartData[itemId] = 1;
            // }
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const item in cartItems) {
            try {
                if(cartItems[item] > 0) {
                    totalCount += cartItems[item];
                }
            } catch (error) {
                console.log(error);
            }
        }
        return totalCount;
    }


    useEffect(() => {
        console.log(cartItems); 
    }, [cartItems]);

    const value = {
        products, currency,
        search, setSearch, showSearch, setShowSearch,
        searchBtn, setSearchBtn,
        cartItems, addToCart,
        getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {probs.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;