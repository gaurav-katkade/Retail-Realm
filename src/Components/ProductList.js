import styled from "styled-components"
import { useProductContext } from "../Context/ProductContex";
import GridView from "./GridView";
import { useFilterContext } from "../Context/FilterContext";
const ProductList = ()=>{
    // const {isLoading,isError,products} = useProductContext();
    // if(isLoading){
    //     return<>
    //     .....Loading
    //     </>;
    // }
    const {filterProducts,gridView} = useFilterContext();

    if(gridView){
        return<Wrapper>
            <GridView filterProducts ={filterProducts} ></GridView>
        </Wrapper>
    }else{
        //
    }
    

}
const Wrapper = styled.section`
    
   

`;
export default  ProductList;