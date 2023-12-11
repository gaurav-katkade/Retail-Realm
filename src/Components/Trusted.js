import React  from "react";
import styled from "styled-components";
const Trusted =()=>{
    return <Wrapper className="brand-section">
        <div className="container">
         <h3>Trusted by 100+ companies</h3>
             <div className="brand-section-slider">
                <div className="slide"><img src=".\images\netflix-logo-png-2562.png" alt="partner logo"/></div>
                <div className="slide"><img src=".\images\company-logo-ideas-32518.png" alt="partner logo"/></div>
                <div className="slide"><img src=".\images\lg-logo-14414.png" alt="partner logo"/></div>
                <div className="slide"><img src=".\images\samsung-logo-png-1295.png" alt="partner logo"/></div>
             </div>
         </div>
    </Wrapper>
}

const Wrapper = styled.section`
    padding:9rem 4.8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    h3{
        text-align:center;
        color: ${({ theme }) => theme.colors.text};
        font-size:2rem;
        font-weight:bold;
    }
    .brand-section-slider{
        padding:10rem 0;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-content:center;
        flex-wrap:wrap;
    }
    img{
        height:12rem;
        width:12rem;
        object-fit:scale-down;
        filter:grayscale(100%);
    }
    @media(max-width:${({theme})=>theme.media.mobile}){
        .brand-section-slider{
            display:grid;
            grid-template-columns:1fr 1fr;
            text-align:center;
        }
    }
`;
export default Trusted;