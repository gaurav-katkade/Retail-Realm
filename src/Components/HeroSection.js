import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
const HeroSection=(props)=>{
    return(
        <Wrapper>
            <div className='Container'>
        
                <div className='grid grid-two-column'>
                    <div className='hero-section-data'>
                        <p className='intro-data'>Welcome to</p>
                        <h1>{props.headingName}</h1>
                        <p>
                        Our mission is to make your online shopping experience as seamless and enjoyable as possible. With user-friendly navigation, secure payment options, and top-notch customer support, we're committed to providing you with a hassle-free and enjoyable shopping journey.
                        </p>
                        
                    </div>
                    <div className='hero-section-image'>
                        <figure>
                            <img className='img-style' src="./images/hero.jpg" alt="hero "></img>
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  padding: 10rem 4.8rem;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;