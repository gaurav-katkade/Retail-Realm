import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
const ProductColors = ()=>{
    //my api dont't have colors value I am giving it myself
    const colors =["rgb(235, 100, 52)","#211815","#f073e7"];
    const [curColor,selectColor] = useState(colors[0]);
    return<Wrapper>
        {
            colors.map((ele,index)=>{
                return<div style={{backgroundColor:ele}} 
                className={curColor===ele?"color-circle active":"color-circle"}
                onClick={()=>{selectColor(ele)}}
                >
                {curColor===ele?<FaCheck/>:null}
            
                </div>
            })
        }
    </Wrapper>;
}
const Wrapper = styled.div`
 display:flex;
 gap:1rem;
.color-circle{
    height:2rem;
    width:2rem;
    border-radius:100%;
    color:#fff;
    padding:0.5rem;
    opacity:0.5;
}
.active{
    opacity:1;
}
`
export default ProductColors;