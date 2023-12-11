import React from "react";
import styled from "styled-components";
import {FaTruck} from "react-icons/fa";
import {BiShieldQuarter} from "react-icons/bi";
import {GiMoneyStack} from "react-icons/gi";
import {GrSecure} from "react-icons/gr";
const Service=()=>{
     return<Wrapper>
        <div className="container">
        <p className="service-heading">Our services</p>
        <div className="service grid grid-three-column">
            <div className="service-1">
                
                <h3><FaTruck className="icon"></FaTruck>Superfast And free delivery</h3>
            </div>
            <div className="service-2">
                <div className="service-col-1">
                    
                    <h3><BiShieldQuarter className="icon"></BiShieldQuarter>Non Contact Shopping</h3>
                </div>
                <div className="service-col-2">
                    <h3><GiMoneyStack className="icon"></GiMoneyStack>Money-Back Guaranted</h3>
                </div>
            </div>
            <div className="service-3">
                <h3><GrSecure className="icon"></GrSecure>Super Secure Payment System</h3>
            </div>
        </div>
        </div>
     </Wrapper>;
};

const Wrapper = styled.section`
    .service-heading{
        text-align:center;
    }
    .grid{
            gap:4.8rem;
        }
    .service{
        
        padding:9rem 4.8rem;
        .service-1,.service-2,.service-3{
            margin:0 1rem;
            width:auto;
            height:30rem;
            background-color:${({theme})=>theme.colors.border};
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-content:center;
            flex-wrap:nowrap;
            text-align:center;
            box-shadow: rgba(0, 0, 0, 9.5) 4px 10px 3px 1px;
            border-radius:2rem;
        }
        .service-2{
            background-color:transparent;
            box-shadow:none;
            gap:4rem;
            .service-col-1,
            .service-col-2{
                display:flex;
                flex-wrap:wrap;
                flex:1;
                flex-direction:row;
                justify-content:center;
                align-content:center;
                text-align:center;
                background-color:${({theme})=>theme.colors.helper};
                box-shadow: rgba(0, 0, 0, 9.5) 4px 10px 3px 1px;
                border-radius:2rem;
            }
        }
        
    }
    .icon{
        margin:0 1rem;
        font-size:3rem;
        transform:translate(0px,10px);
    }
`;

export default Service;