import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display:flex;
    flex:1;
    flex-direction:column;
    max-height: 150px;
    overflow:hidden;
    position:fixed;
    left:auto;
    align-items:center;
    background-color:rgba(196,139,233, 0.75);
    width:100%;
    >h1{
        font-size:75px;
        text-align:center;
        font-family: comic-sans-ms;
        margin:auto;
        margin-top:20px;
        color:rgb(147, 45, 215);
    }
    >div{
        margin:auto;
        margin-bottom: 15px;

    }
`;

export default HeaderStyled;