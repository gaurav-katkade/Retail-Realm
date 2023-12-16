import {createContext, useContext, useEffect, useReducer } from "react"
import { useProductContext } from "./ProductContex";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const  initial_state = {
    filterProducts:[],
    allProducts:[],
    gridView:true,
}

export const FilterContextProvider = ({children}) =>{
    const {products,isLoading,isError} = useProductContext();
    console.log("filterContextProvider -> products ",products);
    const [state,dispatch] = useReducer(reducer,initial_state);
    
    // console.log("filtercontext  -> product ",products);

    const setGridView = ()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    }

    const getFilterProducts = ()=>{
        try{
            if(isLoading){
                console.log("filter is Loading");
            }
            else{
                console.log("getFilterProducts -> else -> dispath ")
                dispatch({type:"SET_FILTER_PRODUCTS",payload:products});
            }
        }
        catch(error){
            console.log(error);
        }
        
    }
    useEffect(
        ()=>{
             getFilterProducts();
            // dispatch({type:"SET_FILTER_PRODUCTS",payload:products});

        }
        
    ,[products]);

    return(<FilterContext.Provider value={{...state,setGridView}}>
        {children}
    </FilterContext.Provider>);

}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}
