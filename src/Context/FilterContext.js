import {createContext, useContext, useEffect, useReducer } from "react"
import { useProductContext } from "./ProductContex";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const  initial_state = {
    filterProducts:[],
    allProducts:[],
    gridView:true,
    sortingValue:"lowest",
    filters:{
        text:"",
        category:"electronics",
    }
}

export const FilterContextProvider = ({children}) =>{
    const {products,isLoading,isError} = useProductContext();
    // console.log("filterContextProvider -> products ",products);
    const [state,dispatch] = useReducer(reducer,initial_state);
    
    // console.log("filtercontext  -> product ",products);
    //to get the catogory of product
    const getUniqueData = (data,property)=>{
        let newVal = data.map(
            (curEle)=>{
                return curEle[property];
            }
        )

        return ["All",...new Set(newVal)];
    };
    

    let uniqueCategory = getUniqueData(products,"category");
    // console.log("uniqueCategory ",uniqueCategory);

    const setGridView = ()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    }
    const setListView = ()=>{
        return dispatch({type:"SET_LIST_VIEW"});
    }

    const getFilterProducts = ()=>{
        try{
            if(isLoading){
                // console.log("filter is Loading");
            }
            else{
                // console.log("getFilterProducts -> else -> dispath ")
                dispatch({type:"SET_FILTER_PRODUCTS",payload:products});
            }
        }
        catch(error){
            console.log(error);
        }
        
    }

    const updateSortingValue = (event)=>{
        // console.log("select -> event -> ",event);
        const SortingValue = event.target.value;
        return dispatch({type:"SET_SORT_VALUE",value:SortingValue});
    }
    const updateFilterValue=(event)=>{
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        console.log("filterContext->updatefiltervalue-> name ",name," value ",value)
        dispatch({type:"SET_FILTER_VALUE",payload:{name,value}});
    }
    useEffect(
        ()=>{
             getFilterProducts();
            // dispatch({type:"SET_FILTER_PRODUCTS",payload:products});

        }
        
    ,[products]);

    useEffect(()=>{
        dispatch({type:"SORT_FILTER_PRODUCTS"})
        dispatch({type:"FILTER_PRODUCTS"})
        
    },[state.sortingValue,state.filters])

    return(<FilterContext.Provider value={{...state,setGridView,setListView,updateSortingValue,updateFilterValue,uniqueCategory}}>
        {children}
    </FilterContext.Provider>);

}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}
