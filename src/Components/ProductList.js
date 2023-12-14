import styled from "styled-components"
import { useProductContext } from "../Context/ProductContex";
import Products from "./Products";
const ProductList = ()=>{
    const {isLoading,isError,products} = useProductContext();
    if(isLoading){
        return<>
        .....Loading
        </>;
    }
    return<Wrapper>
        <div className="grid-product-list">
            {
                products.map(
                    (element,index)=>{
                            return<Products {...element}/>;
                    }
                )
            }
        </div>
    </Wrapper>

}
const Wrapper = styled.section`
    
    .grid-product-list{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        align-items:top;
        gap:1rem;
    }
    .card{
        display:flex;
        flex-direction:column;
        gap:1rem;
        justify-content:flex-end;
        align-items:center;
        /* border:1px solid ${({theme})=>theme.colors.helper};*/
        &:hover{
            transform:scale(1.01);
        }

    }
    .card-flex{
        width:25rem;
        content-align:center;
        display:flex;
        justify-content:space-between;
        gap:2rem;
    }
    figure{
        padding:1rem;
        border:2px solid ${({theme})=>theme.colors.border};
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-item:center;
        height:25rem;
        width:30rem;
    }
    img{
      max-width:100%;
      max-height:100%;
    }
    @media(max-width:${({theme})=>theme.media.mobile}){
        .grid-product-list{
            grid-template-columns:1fr;
        }
    }

`;
export default  ProductList;