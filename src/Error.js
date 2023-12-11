import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";
function Error(){
    return<Wrapper>
        <div className="container">
            <h3 className="error-heading">404</h3>
            <p className="error-sub-heading">UH OH! You're lost</p>
            <p>You entered the wrong URL. Click below button for home page !</p>
            <Button className="btn">
                <NavLink to="/">HOME</NavLink>
            </Button>
        </div>
    </Wrapper>;
}
const Wrapper = styled.section`
margin:0 auto;
text-align:center;
.error-heading{
    font-size:14rem;
    font-weight:bold;
}
.error-sub-heading{
    font-size:7rem;
    font-weight:bold;
}
.btn{
    margin:1rem;
}
`;
export default Error;

