import styled from "styled-components";
import MyImages from "./Components/MyImages";
import { useProductContext } from "./Context/ProductContex";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";
import { FaTruckFast } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";

const API = "https://fakestoreapi.com/products";
const SingleProduct=()=>{
  const {id} = useParams();
  console.log("params id : "+id);
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
  console.log(getSingleProduct);
  //destrunctiong singleProdunct
  console.log("my single product : "+singleProduct);
  const {
    id:alias,
    title,
    price,
    description,
    category,
    image,
    rating:{
      rate,
      count
    }={rate:0,count:0},
  } = singleProduct;

 
  //  console.log(rate);
  useEffect(()=>{
    getSingleProduct(`${API}/${id}`);
  },[]);
  //[] to run at only intial render
  // console.log("my single product 2 : "+singleProduct);

  // console.log(rating);
  
  if(isSingleLoading){ 
    // const {rate,count} = rating; 
    return<Wrapper>
      .....Loading
    </Wrapper>;
  }
  return <Wrapper>
    <div className="container">
      <div className="grid grid-two-column">
        <div className="product-images">
          <MyImages image={image}></MyImages>
        </div>
        <div className="product-data">
          <p>{title}</p>
          <div>
            <p>rating: {rate}</p>
             <p>( {count} Customer Reviews )</p>
          </div>
          <p>MRP : <del><FormatPrice price={price+400}/></del></p>
          <p> Deal of the Day : <FormatPrice price={price}/></p>
          <p>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
                  <FaTruckFast className="warranty-icon"></FaTruckFast>
                  <p>
                    Free devlivery
                  </p>
            </div>
            <div className="product-warranty-data">
                  <TbReplace className="warranty-icon"></TbReplace>
                  <p>
                    30 day replacement
                  </p>
            </div>
            <div className="product-warranty-data"> 
                  <MdOutlineVerified className="warranty-icon"></MdOutlineVerified>
                  <p>
                    Verified
                  </p>
            </div>
            <div className="product-warranty-data"> 
                  <FaTruckFast className="warranty-icon"></FaTruckFast>
                  <p>
                    1 year warranty
                  </p>
            </div>
              
              
             
             
          </div>
        </div>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
