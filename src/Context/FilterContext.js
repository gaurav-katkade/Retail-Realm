import {createContext, useContext, useEffect, useReducer } from "react"
import { useProductContext } from "./ProductContex";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const  initial_state = {
    filterProducts:[],
    allProducts:[],
    gridView:true,
    sortingValue:"lowest",
}

export const FilterContextProvider = ({children}) =>{
    const {products,isLoading,isError} = useProductContext();
    console.log("filterContextProvider -> products ",products);
    const [state,dispatch] = useReducer(reducer,initial_state);
    
    // console.log("filtercontext  -> product ",products);

    const setGridView = ()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    }
    const setListView = ()=>{
        return dispatch({type:"SET_LIST_VIEW"});
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

    const updateSortingValue = ()=>{
        return dispatch({type:"SET_SORT_VALUE"});
    }

    useEffect(
        ()=>{
             getFilterProducts();
            // dispatch({type:"SET_FILTER_PRODUCTS",payload:products});

        }
        
    ,[products]);

    useEffect(()=>{
        dispatch({type:"SORT_FILTER_PRODUCTS"});
    },[state.sortingValue])

    return(<FilterContext.Provider value={{...state,setGridView,setListView,updateSortingValue}}>
        {children}
    </FilterContext.Provider>);

}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}
