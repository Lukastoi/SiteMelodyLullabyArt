import styled from 'styled-components'

export const GaleriePoppinStyled = styled.div`
    height:auto;
    width:700px;
    background-color:rgba(150,150,150,0.5);
    position:absolute;
    display:block;
    z-index:150000;
    top:1%;
    left:15%;
    font-size:20px;
    font-family:Raleway sans;
    display:flex;
    padding:15px;
    flex-direction:column;
    .button-close{
        display:flex;
        margin:auto;
        margin-right:0px;
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
        max-width:350px;
        height:auto;
    }
`;

export default GaleriePoppinStyled;