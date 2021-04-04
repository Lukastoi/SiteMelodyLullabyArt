import styled from 'styled-components'

export const GaleriePoppinStyled = styled.div`
    position:fixed;
    top:0;
    left:0;
    display:block;
    z-index:150000;
    font-size:20px;
    font-family:Raleway sans;
    display:flex;
    padding:15px;
    flex-direction:column;
    width:100%;
    height:100%;
    background-color: rgba(196,139,233,0.75);
    .button-close{
        display:flex;
        margin:auto;
        margin-right:40px;
        margin-top:10px;
        min-height : 30px;
        max-width:30px;
        margin-bottom:0px;
    }
    .divImgDesc{
        display:flex;
        flex-direction:row;
        margin-top:10px;
    }
    .divDescription{
        background-color:rgba(215,215,215,0.95);
        margin-left: 10px;
        margin-right:10px;
        padding: 10px 10px 10px 10px;
        border: 1px solid grey;
        border-radius:5px;
    }
    >div >div >p{
        display:flex;
        margin:auto;
    }
    >div >div >a{
        margin-top:20px;
        display:flex;
        text-align:left;
    }
    .imgPoppinDiv{
        display:flex;
        margin:auto;
        padding:10px;
        width:auto;
    }
    .imgPoppin{
        displays: flex;
        margin:auto;
        margin-top:0px;
        max-width:500px;
        height:auto;
    }
`;

export default GaleriePoppinStyled;