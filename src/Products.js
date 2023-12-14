import React from "react";
import styled from "styled-components";
import ProductList from "./Components/ProductList";
import FilterSection from "./Components/FilterSection";
import Sort from "./Components/Sort";

const Products = () => {
  return <Wrapper>
    <div className="grid grid-filter-column">
      <div>
        <FilterSection/>
      </div>
      <div>
        <div>
          <Sort/>
        </div>
        <div>
          <ProductList/>
        </div>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
    padding:0 3em;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
      }
      
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
