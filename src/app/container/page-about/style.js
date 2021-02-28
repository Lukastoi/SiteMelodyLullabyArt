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
        font-size: 18px;
        text-align: center;
        margin : auto;
        width:100%;
        overflow:hidden;
    }
    .about-perso{
        width:100%;
        align-item:center;
        display:flex;
        flex-direction:column;
        margin-auto;
    }
    .about-perso >div{
        width:30%;
        display:flex;
        flex-direction: column;
        overflow:hidden;
        margin:auto;
        text-align:center;
    }
    .photo-about{
        flex:1;
    }
    .photo-about >img{
        position:relative;
        top:0;
        left:0;
        width:100%;
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
        margin-top:20px;
    }
    .presentationTravail{
        width:50%;
        align-item:center;
        display:flex;
        flex-direction:row;
        margin:auto;
        margin-top:22px;
    }
`;

export default AboutStyled;