import { FaStarHalfStroke } from "react-icons/fa6";//half star
import { FaStar } from "react-icons/fa6";//fulll star
import { FaRegStar } from "react-icons/fa6";//empty star
import styled from "styled-components";
const Stars = ({rate})=>{
    const ratingStar = Array.from({length:5},
        (ele,index)=>{
            let number = index+0.5;
            return(
               
                
                rate >= index+1?(<FaStar></FaStar>): rate>=number?(<FaStarHalfStroke></FaStarHalfStroke>):(<FaRegStar></FaRegStar>)
                
               
                );
            

        }
        );
        return(
            // <Wrapper>
                <div className="icon-style">
                   {rate} {ratingStar}
                </div>
            // </Wrapper>
        )
};
const Wrapper = styled.section`

`
export default Stars;