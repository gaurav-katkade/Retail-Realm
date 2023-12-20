import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
const cartContext = createContext();

const initial_state ={
    cart:[],
    total_amount:0,
    shipping_fees:20,
    total_items:0,
}
const CartProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initial_state);

    const addToCart = (id,title,price,image,color,amount) =>{
         dispatch({type:'SET_CART_VALUE',payload:{id,title,price,image,color,amount}});
    }

    const removeItem=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id});
    }
    return<cartContext.Provider value={{...state,addToCart,removeItem}}>
        {children}
    </cartContext.Provider>;
};

const useCartContext=()=>{
    return useContext(cartContext);
}
export {CartProvider,cartContext,useCartContext};