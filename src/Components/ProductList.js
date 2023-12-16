import styled from "styled-components"
// import { useProductContext } from "../Context/ProductContex";
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
    console.log("ProductList -> filterProducts ",filterProducts);
    if(gridView){
        console.log("productList -> grid View is true ");
        return<Wrapper>
            <GridView filterProducts ={filterProducts} ></GridView>
        </Wrapper>;
    }
    

}
const Wrapper = styled.section`
    
   

`;
export default  ProductList;