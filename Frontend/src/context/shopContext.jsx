import { createContext, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

    const ShopContextProvider = (probs) => {

    const currency = '₹';

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [searchBtn, setSearchBtn] = useState(true);

    const value = {
        products, currency,
        search, setSearch, showSearch, setShowSearch,
        searchBtn, setSearchBtn
    }

    return (
        <ShopContext.Provider value={value}>
            {probs.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;