import styled from 'styled-components';

export const AboutStyled = styled.div`
    display:flex;
    position:relative;
    margin: auto;
    margin-top: 201px;
    flex-direction:column;
    width:100%;
    margin-bottom:55px;
    >div{
        color: white;
        font-family: "Nunito Sans";
        font-size: 25px;
        text-align: center;
        margin : auto;
    }
    .about-perso{
        width:50%;
        align-item:center;
        display:flex;
        flex-direction:row;
        margin-auto;
    }
    .about-perso >div{
        width:100%;
        display:flex;
        flex-direction: row;
        max-height:200px;
        overflow:hidden;
    }
    .photo-about{
        flex:1;
        margin-right:25px;
    }
    .photo-about >img{
        position:relative;
        top:0;
        left:0;
        width:auto;
        max-height:200px;
        height:auto;
        overflow:hidden;
    }
    .presentation-perso{
        display:flex;
        flex:2;
        width:auto;
        color:white;
        font-family: "Nunito Sans";
        font-weight:400;
        font-size:22px;

    }
`;

export default AboutStyled;