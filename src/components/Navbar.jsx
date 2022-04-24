
import {CartContext} from "../Contexts/CartContext"
import {useContext} from "react"
export const Navbar = () =>{
    const {cart}= useContext(CartContext);
    return <nav 
    style = {{
        display: 'flex',
        justifyContent: 'end',
        padding: "15px 20px",
        fontSize:"28 px",
        border:"2px solid gray",
        margin:"10px"
    }}
    >
        Cart Items:{cart}
    </nav>
}