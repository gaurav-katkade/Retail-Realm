import styled from "styled-components";
import { useProductContext } from "./Context/ProductContex";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct=()=>{
  const {id} = useParams();
  console.log("params id : "+id);
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext;
  useEffect(()=>{
    getSingleProduct(`/singleproduct/${id}`)
  }
    
    ,[]);
  //destrunctiong singleProdunct
  console.log("my single product : "+singleProduct);
  const {
    id:axile,
    title,
    price,
    description,
    category,
    image,
    rating,//its an object
  } = singleProduct;

  const {rate,count}=rating; 
  if(isSingleLoading){
    <Wrapper>
      .....Loading
    </Wrapper>
  }
  return <Wrapper>
    single product
  </Wrapper>;
}

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
