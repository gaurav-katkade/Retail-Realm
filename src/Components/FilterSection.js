import styled from "styled-components";
import { useFilterContext} from "../Context/FilterContext";
import FormatPrice from "../Helpers/FormatPrice";
const FilterSection=()=>{
    const {
        filters:
            {
                text,
                category,
                range,
                maxPrice,
            },
            updateFilterValue,
            uniqueCategory,
        } = useFilterContext();
    console.log()
    return<Wrapper>
        <form method="#" onSubmit={(e)=>e.preventDefault}>
            <div className="filter-search">
                <input 
                type="text" 
                name="text" 
                value={text}
                onChange={updateFilterValue}
                placeholder="SEARCH"
                ></input>
            </div>
            <div className="filter-category">
                <h3>Category </h3>
                {
                    uniqueCategory.map(
                        (curEle)=>{
                            console.log("filtersection-> uniqueCategory map ",curEle);
                            return(
                                <div>
                                <button
                                className={category===curEle?"active category-name":"category-name"}
                                onClick={updateFilterValue}
                                name="category"
                                value={curEle}
                                id={curEle.id}>
                                    {curEle}
                                </button>
                                </div>
                            );
                        }
                    )
                }
            </div>
            <div className="filter-range">
                <h3>Price </h3>
                {/* <p>{range}</p> */}
                <p><FormatPrice price={range}></FormatPrice></p>
                <input type="range" name="range" value={range} min="0" max={maxPrice+100} step="2" onChange={updateFilterValue}></input> 
            </div>
        </form>
    </Wrapper>
}
const Wrapper = styled.section`
   input[type="text"]{
    text-transform:none;
    border:2px solid ${({theme})=>theme.colors.black};
   }
   .active{
        border-bottom:2px solid ${({theme})=>theme.colors.helper};
   }
   category-name{
    all:unset;
    pointer:cursor;
   }
   input[type="range"]{
    border:none;
    padding:0;
    box-shadow:none;
   }
   input[type="text"]{
    padding:1rem 2rem;
    border:2px solid ${({theme})=>theme.colors.helper};
    border-radius:10px;
   }
   .filter-search,.filter-range,.filter-category{
        padding:2rem 0.7rem;
   }
`;
export default FilterSection;