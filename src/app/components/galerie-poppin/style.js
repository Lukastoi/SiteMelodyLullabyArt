import styled from 'styled-components'

export const GaleriePoppinStyled = styled.div`
    height:500px;
    width:500px;
    background-color:rgba(150,150,150,0.5);
    position:fixed;
    display:block;
    z-index:150000;
    top:80px;
    left:30%;
    >button{
        display:flex;
        margin:auto;
        min-height : 50px;
        font-size:20px;
        font-family:Raleway sans;
    }
`;

export default GaleriePoppinStyled;