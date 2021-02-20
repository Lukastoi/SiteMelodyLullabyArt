import styled from 'styled-components'

export const StyledImagesAcceuil = styled.div`
display:flex;
flex:1;
flex-direction:column;
width:80%;
margin:auto;
>div{
    display:flex;
    flex-direction: row;
    height:100%;
}
.img1{
    max-width: 30%;
    max-height:300px;
    margin:auto;
}
.mainImg{
    max-width: 60%;
    max-height:400px;
    margin:auto;
    box-shadow: 5px 5px 5px 5px black;
    margin:15px;
}
`;

export default StyledImagesAcceuil;