import styled from "styled-components";
const MyImages = (props)=>{
    return<Wrapper className="product-image">
        <div className="image-div">
            <img src={props.image}></img>
            
        </div>
    </Wrapper>;
}
const Wrapper = styled.section`
    .image-div{
        height:38rem;
        width:100%;
        
    }
    img{
        max-width:100%;
        max-height:100%;
        object-fit:contain;
        box-shadow: ${({ theme }) => theme.colors.shadow};
    }
`;
export default MyImages;