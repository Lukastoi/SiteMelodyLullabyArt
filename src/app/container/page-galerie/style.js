import styled from "styled-components"

export const GalerieStyled = styled.div`
    display:flex;
    margin:auto;
    width:100%;
    height:auto;
    position:relative;
    top:144px;
    align-item:center;
    padding:30px;
    overflow:hidden;
    margin-bottom:144px;
    .buttonTest{
        display:flex;
        margin:auto;
    }
    .page-articles{
        width:100%;
        height:100%;
    }
    
.articles-list-wrapper {
	margin: 0px auto;
	background-color: transparent;
    box-sizing: border-box;
    position: relative;
    width: 980px;
    padding: 40px 20px 20px;
    width:90%;
}
	.articles-list-wrapper >section{
		display: flex;
		flex-flow: row wrap;
		width: 100%;
	}
		.articles-list-wrapper >section .articles-listing{
			display: flex;
			flex-flow: row wrap;
			width: 100%;
		}
			
`;

export default GalerieStyled;