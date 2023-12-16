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
    featuredProducts:[],
    singleProduct:{},
    isSingleLoading:false,
}
// here childern is APP
const AppProvider=({children})=>{
    const [state,dispatch] = useReducer(reducer,intialState);

    const getProduct = async (url)=>{
        console.log("ProductContext -> getProduct is called");
        dispatch({type:'SET_LOADING'});
        try {
            const res = await axios.get(API);
            console.log(res);
            const products = await res.data; 
            console.log("ProuctContext -> getProducts -> products ",products);
            dispatch({type:'SET_API_DATA',payload:products})
        } catch (error) {
            console.log(error);
            dispatch({type:'API_ERROR'});
        }
        
    }
    const getSingleProduct= async (url)=>{
            dispatch({type:'SET_SINGLE_LOADING'})
        try {
            const res = await axios.get(url);
            // console.log("single product payload "+res);
            const singleProduct = await res.data;
            // console.log("single Producnt data : "+singleProduct);
            dispatch({type:'SET_SINGLE_DATA',payload:singleProduct});
        } catch (error) {
            console.log(error);
            dispatch({type:'SET_SINGLE_ERROR'})
        }

    }
    useEffect(()=>{
        getProduct(API);
    },[]);
    return(
        <AppContext.Provider value={{...state,getSingleProduct}}>
            {children}
        </AppContext.Provider> 
    );
    
};
//creating Custom hook
const useProductContext =()=>{
    return useContext(AppContext);
};
export {AppProvider,useProductContext,AppContext};


