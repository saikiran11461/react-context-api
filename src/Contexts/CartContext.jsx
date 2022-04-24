
import React, {createContext} from "react"
import {useState} from "react"
export const CartContext = createContext();

//CartContext.Provider
export const CartContextProvider =({children})=>{
    const [cart , setcart] = useState(10);
    
    const handleChange =(inc) =>{
        setcart(cart + inc);
        console.log(cart)
    }
    return ( 
        <React.StrictMode>
        <CartContext.Provider value={{cart,handleChange}}>
         {children}
        </CartContext.Provider>
        </React.StrictMode>
       
    );
}; 