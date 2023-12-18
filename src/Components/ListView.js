import styled from "styled-components";
import {Button} from "../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
const ListView = ({filterProducts}) =>{
    return<Wrapper>
        <div className="card grid grid-two-column">
        {filterProducts.map(
            (curEle)=>{
                // console.log("ListView -> filterProduct.map -> curelm ",curEle);
                const {title,image,description,price,id} = curEle;
            return(
            <>
            <div className="img-div">
                <figure>
                    <img src={image} alt={title}></img>
                </figure>
            </div>
            <div className="content-div">
                <h3>{title}</h3>
                <p>
                    <FormatPrice price={price}/>
                </p>
                
                <p>{description.slice(0,90)}....</p>
                <NavLink to={`/singleproduct/${id}`}>
                <Button className="read-more-btn">Read more</Button>
                </NavLink>
            </div>
            </>
        );
    })}
    </div>
    </Wrapper>;
}
const Wrapper = styled.section`
    .img-div{
        
        
    }
    .card{
        grid-template-columns:1fr 1.5fr;
        margin:2rem 0;
    }
    figure{
        height:25rem;
        display:flex;
        justify-content:center;
        overflow:hidden;
       

        
    }
    img{
       
        object-fit:fill;
    }
    p{
        margin:1rem 0rem;
    }
`;
export default ListView;