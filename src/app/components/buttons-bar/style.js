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
        margin-left:2px;
        
    }
    >div>button{
        font-family:  'Arial Black', Gadget, sans-serif;
        color:grey;
        text-align:center;
        margin:auto;
        width:100%;
        border:none;
        backgroun: none;
        background-color:white;
        cursor: default;
        border-radius: 5px;
    }
    .selected{
        
    }
    >div>button:hover{
       color:#ea1369;
       cursor: pointer;
    }
    
    
`;

export default ButtonBarStyled;