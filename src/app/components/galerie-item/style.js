import styled from 'styled-components'

export const GalerieItemStyled = styled.article`
.article-item{
    background-color: rgb(245, 245, 245);
    box-sizing: border-box;
    display: flex;
    margin-bottom: 50px;
    text-align: left;
    transition: all 500ms ease 0s;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom:50px;
}
    .article-item >figure{
        overflow: hidden;
        border-radius: 5px 5px 0px 0px;
        position: relative;
        width: 100%;
        margin: 0px;
        padding: 0px;
        border: 0px;
        font: inherit;
        vertical-align: baseline;
    }
        .buttonGalerieImage{
            display: block;
            transition: transform 1100ms ease 0s;
            transform: scale(1);
            transform-origin: center center;
            color: rgb(38, 79, 96);
            font-family: Raleway, sans-serif;
            font-weight: 500;
            align-items: center;
        }
        .buttonGalerieImage::before{
            transition: all 300ms ease 0s;
            content: "";
            background-color: transparent;
            display: block;
            height: 100%;
            left: 0px;
            position: absolute;
            top: 0px;
            z-index: 2;
        }
            .buttonGalerieImage >img{
                object-fit: cover;
                max-height: 190px;
                width: auto;
                position: relative;
                z-index: 1;
            }
    .article-item >div{
        display: flex;
        flex-flow: column wrap;
        padding: 25px 20px;
        background-color: rgb(255, 255, 255);
        border-radius: 0px 0px 5px 5px;
    }
        .article-item >div >p{
            margin: 0px;
            padding: 0px;
            border: 0px;
            font: inherit;
            vertical-align: baseline;
            font-family: "Nunito Sans", sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 1.1875;
            color: rgb(38, 79, 96);
            margin-bottom: 0px;
            text-align: left;
        }
            .buttonGalerieImage{
                text-decoration: none;
                display: inline-flex;
                -webkit-box-align: center;
                align-items: center;
                transition: all 250ms ease 0s;
                
            }
            .article-item >div >p .titre-article{
                text-decoration: none;
                display: inline-flex;
                background-image: linear-gradient(to left, transparent, transparent calc(50% + 1px), rgb(186, 147, 28) calc(50% + 1px), rgb(186, 147, 28));
                color: rgb(186, 147, 28);
                background-position: 100% 0px;
                background-size: 200% 100%;
                padding: 6px;
                text-transform: uppercase;
                transform: translate(-6px, -6px);
                transition: background 250ms ease-in 0s, color 100ms ease-in 0s;
            }
                .buttonGalerieImage >span{
                }
        .article-item >div >h1{
            font-size: 24px;
            line-height: 1.2;
            font-family: Raleway, sans-serif;
            font-weight: 700;
            margin-bottom: 15px;
            width: 100%;
            color: rgb(38, 79, 96);
            text-align: left;
        }
            .article-item >div >h1 .buttonGalerieImage{
                font-family: Nunito Sans;
                color: inherit;
                position: relative;
                text-decoration: none;
                font-size: 12px;
            }
`;

export default GalerieItemStyled;