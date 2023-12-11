import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";
// created the context
const AppContext = createContext();

// API link to get fake products
const API = "https://fakestoreapi.com/products";
// why we here use await 

const intialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProduct:[]
}
// here childern is APP
const AppProvider=({children})=>{
    const [state,dispatch] = useReducer(reducer,intialState);
    const getProduct = async (url)=>{
        dispatch({type:'SET_LOADING'});
        try {
            const res = await axios.get(API);
            console.log(res);
            const products = await res.data; 
            dispatch({type:'SET_API_DATA',payload:products})
        } catch (error) {
            console.log(error);
            dispatch({type:'API_ERROR'});
        }
        
    }
    useEffect(()=>{
        getProduct(API);
    },[]);
    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider> 
    );
    
};
//creating Custom hook
const useProductContext =()=>{
    return useContext(AppContext);
};
export {AppProvider,useProductContext,AppContext};


