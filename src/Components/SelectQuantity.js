import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
const SelectQuantity=({amount,setIncrease,setDecrease})=>{
    return<Wrapper>
        <div className="btn" onClick={setDecrease}>
             <FaMinusCircle/>
        </div>
        <p>{amount}</p>
        <div className="btn" onClick={setIncrease}>
           <FaPlusCircle/>
        </div>
    </Wrapper>;
}

const Wrapper = styled.div`
    display:flex;
    gap:1rem;
    .btn{
        font-size:2rem;
        color:${({theme})=>theme.colors.helper}
    }
`;
export default SelectQuantity;