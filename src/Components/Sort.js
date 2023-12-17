import styled from "styled-components";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import { useFilterContext } from "../Context/FilterContext";
const Sort =()=>{
    const {filterProducts,gridView,setGridView,setListView,updateSortingValue} = useFilterContext();
    return<Wrapper>
        <div className="sort-div">
            <div>
                <button
                 className={gridView?"active view-btn":"view-btn"}
                 onClick={setGridView}
                 >
                    <IoGrid/>
                </button>
                <button 
                className={!gridView?"active view-btn":"view-btn"}
                onClick={setListView}
                >
                    <FaListUl/>
                </button>
            </div>
           <p>
            {`${filterProducts.length} total products`} 
           </p>
            <div className="sort-selection">
                <form method="#">
                    <label htmlFor="sort"></label>
                    <select className="sort-selection-style" id="sort" onClick={updateSortingValue}>
                        <option className="sort-select-option" value="a-z"><p>a - z</p></option>
                        <option className="sort-select-option" value="#" disabled></option>
                        <option className="sort-select-option" value="z-a">z - a</option>
                        <option className="sort-select-option" value="#" disabled></option>
                        <option className="sort-select-option" value="highest">Price(highest)</option>
                        <option className="sort-select-option" value="#" disabled></option>
                        <option className="sort-select-option" value="lowest">Price(lowest)</option>
                        <option className="sort-select-option" value="#" disabled></option>
                    </select>
                </form>
            </div>
        </div>
    </Wrapper>;
};
const Wrapper = styled.section`
    .sort-div{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .view-btn{
        all:unset;
        margin:1rem;
        font-size:1.8rem;
        border-radius:10px;
        padding:0.7rem 1rem;
        background-color:#fff;
        color:${({theme})=>theme.colors.helper};
    }
    .active{
        color:#fff;
        background-color:${({theme})=>theme.colors.helper};
    }
    .sort-selection .sort-selection-style {
        padding: 0.5rem;
        cursor: pointer;
    
        .sort-select-option {
          padding: 0.5rem 0;
          cursor: pointer;
          height: 2rem;
          padding: 10px;
        }
      }
`;
export default Sort;