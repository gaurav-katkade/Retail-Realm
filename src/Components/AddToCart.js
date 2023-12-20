import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
// import SingleProduct from "../SingleProduct";
import { useCartContext } from "../Context/CartContext";
const AddToCart = ({product}) =>{

    const {addToCart} = useCartContext();
    const {id,title,price,image,color,amount} = product;
    console.log("addtocart-> product -> ",product);
    return(
        <NavLink to="/cart">
              <Button onClick={()=>{addToCart(id,title,price,image,color,amount)}}>ADD TO CART</Button>
        </NavLink>
    );
}
export default AddToCart;
