import styled from 'styled-components';
const unicorn = '../../datas/images/unicorn.png';
export const ButtonBarStyled = styled.div`
    display:flex;
    flex-direction:row;
    width:60%;
    margin:auto;
    >div{
        text-align:center;
        margin:auto;
        width:100%;
        margin-left:35px;
    }
    >div>button{
        font-family:  'Arial Black', Gadget, sans-serif;
        color:rgb(147, 45, 215);
        text-align:center;
        margin:auto;
        width:100%;
        border:none;
        background: none;
        background-color:rgba(255,255,255,0.5);
        cursor: default;
        border-radius: 5px;
    }
    .selected{
        
    }
    >div>button:hover{
        color:rgb(102, 0, 170);
       cursor: pointer;
       background-color: rgba(255,255,255,0.95);
    }
    
    
`;

export default ButtonBarStyled;