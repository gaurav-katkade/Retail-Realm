import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar.js';


const Header=()=>{
    return <MainHeder>
        <NavLink to="/">
            {/* <img src='./images/logo.png' alt='logo'></img> */}
            <p className='logo'>Retail Realm</p>
        </NavLink>
        <Navbar/>
    </MainHeder>;
};

const MainHeder = styled.header` 
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
    font-family: 'Dhurjati', sans-serif;
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.helper};
}
`;

export default Header;