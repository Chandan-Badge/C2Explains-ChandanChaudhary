import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (probs) => {

    const currency = "₹";

    const value = {
        products, currency
    }

    return (
        <ShopContext.Provider value={value}>
            {probs.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;