import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
const Product =({id,title,image,price,category})=>{
    return(
        <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image}></img>
                {/* <figcaption>{category}</figcaption> */}
            </figure>
            <div className="card-flex">
                <h3>{title}</h3>
                <p className="price"><FormatPrice price={price}/></p>
            </div>
        </div>
        </NavLink>
    );
}

export default Product;