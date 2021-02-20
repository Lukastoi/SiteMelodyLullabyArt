import styled from 'styled-components';

export const FooterStyled = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    margin:auto;
    width:100%;
    >div{
        margin:auto;
        width:100%;
        display:flex;
        text-align:center;

        flex-direction:row;
    }
    >div>div{
        margin-auto;
        width:100%;
    }
    .copyright{
        margin-top: 15px;
    }
`;

export default FooterStyled;