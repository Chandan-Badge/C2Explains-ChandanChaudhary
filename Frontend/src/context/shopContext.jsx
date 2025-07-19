import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets.js";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (probs) => {

    const currency = '₹';

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [searchBtn, setSearchBtn] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const addToCart = async (itemId) => {
        
        toast.success("Added in the cart.");

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]) {
            // if(cartData[itemId]) {
            //     cartData[itemId] += 1;
            // }
            // else {
            //     cartData[itemId] = 1;
            // }
            // toast.success("Added in the cart.");
            cartData[itemId] += 1;

        } else {
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
    }

    useEffect(() => {
    // console.log(cartItems); 
    }, [cartItems]);

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

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            try {
                if (cartItems[items] > 0) {
                    totalAmount += itemInfo.price * cartItems[items];
                }
            } catch (error) {

            }
        }

        return totalAmount;
    }

    // Get products data from backend database
    const getProductsData = async () => {
        try {
            
            const response = await axios.get(backendUrl + "/api/product/list");
            // console.log(response.data);

            if(response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProductsData();
    }, [])

    const value = {
        products, currency,
        search, setSearch, showSearch, setShowSearch,
        searchBtn, setSearchBtn,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate,
        backendUrl
    }

    return (
        <ShopContext.Provider value={value}>
            {probs.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;