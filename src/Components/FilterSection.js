import styled from "styled-components";
import { useFilterContext} from "../Context/FilterContext";

const FilterSection=()=>{
    const {
        filters:
            {
                text,
                category,
            },
            updateFilterValue,
            uniqueCategory,
        } = useFilterContext();
    console.log()
    return<Wrapper>
        <form method="#" onSubmit={(e)=>e.preventDefault}>
            <input 
            type="text" 
            name="text" 
            value={text}
            onChange={updateFilterValue}
            ></input>
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
`;
export default FilterSection;