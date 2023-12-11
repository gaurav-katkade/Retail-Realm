import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../styles/Button";
import {FaTwitterSquare} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
const Footer=()=>{

    return<Wrapper>
        <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3>Ready to get started</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button className="btn hireme-btn">
                        <NavLink to="/">Get started</NavLink>
                    </Button>
                </div>
            </div>
        </section>
        <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about">
                    <h3>Gaurav Katkade</h3>
                    <p>lorem ipsum ,dolor sit amet cosetactf elit</p>
                </div>
                <div className="footer-subscribe">
                    <h3>Subscribe to get Important updates</h3>
                    <form action="#">
                        <input type="email" name ="email" placeholder="E-MAIL"/>
                        <input type="submit" value="Subscribe"/>
                    </form>
                </div>
                <div className="footer-social">
                    <h3>Follow us</h3>
                    <div className="footer-social-icons">
                        <div><BsInstagram className="icons"/></div>
                        <div><FaTwitterSquare className="icons"/></div>
                        
                        
                    </div>
                </div>
                <div className="footer-contact">
                    <h3>Call us</h3>
                    <h3>+12 9834539845</h3>
                </div>
            </div>
            <div className="footer-bottom-section">
                <hr/>
                <div className="container grid grid-two-column">
                    <p>
                        @{new Date().getFullYear()} All Rights Reserved
                    </p>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITION</p>
                    </div>
                </div>
            </div>
        </footer>
    </Wrapper>;
};

const Wrapper = styled.section`
.iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
 footer{
    padding:14rem 0 9rem 0;
    background-color:${({theme})=>theme.colors.footer_bg};
    h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2.4rem;
      }
      p {
        color: ${({ theme }) => theme.colors.white};
      }
    .footer-social-icons{
        display:flex;
        gap:2rem;
        div{
            padding:1rem;
            border-radius:50%;
            border:2px solid ${({theme})=>theme.colors.white};
            .icons{
                color:${({theme})=>theme.colors.white};
                font-size:2.4rem;
                position:relative;
                cursor:pointer;
            }
        }
    }
    .footer-bottom-section{
        padding:9rem 0 0 0 ;
        hr{
            margin-bottom:2rem;
            color:${({theme})=>theme.colors.hr};
            height:0.1px;
        }
    }
    
 }
 @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .contact-short {
          max-width: 80vw;
          margin: 4.8rem auto;
          transform: translateY(0%);
          text-align: center;
    
          .grid div:last-child {
            justify-self: center;
          }
        }
    
        footer {
          padding: 9rem 0 9rem 0;
        }
`;

export default Footer;