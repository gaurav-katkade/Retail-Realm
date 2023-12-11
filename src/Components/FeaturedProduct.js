import styled from "styled-components";
import { useProductContext } from "../Context/ProductContex";
import Products from "./Products";
const FeaturedProduct = () =>{
    const {featuredProduct,isLoading,isError} = useProductContext();
    if(isLoading){
        return<>
        ....Loading
        </>;
    }
    return(<Wrapper>
        <Products ></Products>
    </Wrapper>);
};
const Wrapper = styled.section`
 background:${({theme})=>theme.colors.bg};
`;
export default FeaturedProduct;