import styled from "styled-components";
import { useProductContext } from "../Context/ProductContex";
import Products from "./Products";
const FeaturedProduct = () =>{
    const {featuredProducts,isLoading,isError} = useProductContext();
    if(isLoading){
        return<>
        ....Loading
        </>;
    }
    console.log(featuredProducts)
    return(<Wrapper>
        <div className="container">
        <p className="common-heading">Our Featured Product</p>
                <div className="grid grid-three-column">
                {
                featuredProducts.map((product)=>{
                return<Products id={product.id} {...product}></Products>;
                }) 
                } 
            </div> 
        </div>
    </Wrapper>);
};
const Wrapper = styled.section`
 background:${({theme})=>theme.colors.bg};
    .catainer{
        padding:9rem 0;
    }
    .common-heading{
        padding:1rem;
    }
    .card{
        overflow:hidden;
        &:hover{
            transform:scale(1.01);
        }
    }
    .card-flex{
        padding:1rem;
        content-align:center;
        display:flex;
        justify-content:space-between;
    }
    figure{
        border-radius:10px;
        border:7px solid rgba(98, 84, 243, 0.3);
    } 
    img{
        height:25rem;
        width:100%;
        object-fit:cover;            

    }
    .price{
        font-weight:400;
        font-size:3.5rem;
    }
`;
export default FeaturedProduct;