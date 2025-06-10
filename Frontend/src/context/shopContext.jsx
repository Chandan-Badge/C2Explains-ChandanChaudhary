import { createContext, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

    const ShopContextProvider = (probs) => {

    const currency = '₹';

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(true);

    const value = {
        products, currency,
        search, setSearch, showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {probs.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;