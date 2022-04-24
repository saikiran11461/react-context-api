import React, {createContext} from "react"

const ThemeContext = createContext();

export const ThemeContextProvider =({children})=>{
    return (
        <React.StrictMode>
        <ThemeContext.Provider value={0}>
         {children}
        </ThemeContext.Provider> 
        </React.StrictMode>
       
    );
}; 