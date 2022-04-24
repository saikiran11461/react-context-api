import {CartContext} from "../Contexts/CartContext";
import {useContext} from "react";
export const Card = () =>{
    const {handleChange} = useContext(CartContext)
    return (
        <div   style={{
            height:"200px",
            padding:"10px",
            background:"black",
            marginLeft:"200px",
            width:"400px",
        }} >
          
          <button onClick ={()=>{handleChange(1)
        
        }}>Add to Cart</button>

        </div>
    )
}