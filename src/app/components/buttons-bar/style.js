import styled from 'styled-components';
const unicorn = '../../datas/images/unicorn.png';
export const ButtonBarStyled = styled.div`
    display:flex;
    flex-direction:row;
    width:90%;
    max-width:800px;
    margin:auto;
    >div{
        text-align:center;
        margin:auto;
        width:100%;
    }
    >div>button{
        color:grey;
        text-align:center;
        margin:auto;
        width:100%;
        border:none;
        backgroun: none;
        background-color:white;
        cursor: default;
    }
    .selected{
        
    }
    >div>button:hover{
       color:black;
       cursor: pointer;
    }
    
    
`;

export default ButtonBarStyled;