import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    // Food list ko count ko lagi
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemID) => {
        // cartitems first time click garda itemID unavailable hunxa, so
        if(!cartItems[itemID]){
            setCartItems((prev) => ({...prev, [itemID]: 1}))    // itemID define garerw value set to 1, if not found
        }
        else {
            setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}))  // if found, increment by 1
        }
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}))  // decrement by 1
    }

    // cartItems update huda log garna lai
    useEffect(() => {
        console.log(cartItems);
    
    }, [cartItems]);

    // yesko vitra vako any element chahi aru jun component maa ni use garna milni vo
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider; 