import React, { Component } from 'react';
import GalerieStyled from './style';
import { connect } from "react-redux";
import GaleriePoppin from "../../components/galerie-poppin/index";
import GalerieItem from "../../components/galerie-item/index";
import ImagesGalerie from "../../datas/images/images-galerie/index";

class PageGalerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poppinOpen: false,
            currentImage: "",
        }
        this.callback = this.callback.bind(this);
        this.callBackOpenPoppin = this.callBackOpenPoppin.bind(this);
    }
    callback = () => {
        this.setState({
            poppinOpen: false,
            currentImage: "",
        })
    }

    callBackOpenPoppin = (e, imageSrc) => {
        const current = ImagesGalerie.find(i => i.src === imageSrc);
        console.log("CURRENT :: ", current)
        this.setState({
            poppinOpen: true,
            currentImage: {
                description: current.description,
                src: imageSrc,
                link:current.link
            },

        })
    }

    render() {
        const { poppinOpen, currentImage } = this.state;
        const descriptionTxt = "ceci est l'image d'un lapin";
        console.log("ImagesGalerie :: ", JSON.stringify(ImagesGalerie))
        return (
            <GalerieStyled class="container-page-articles" titlePage="Homepage">
                {poppinOpen && <GaleriePoppin callback={this.callback} description={currentImage.description} image={currentImage.src} link={currentImage.link} />}
                <div class="page-articles">
                    <section>
                        <div class="articles-list-wrapper">
                            <section class="">
                                <div class="articles-listing">
                                    {ImagesGalerie.map(Image => { return (<GalerieItem imageSrc={Image.src} text={Image.text} callback={this.callBackOpenPoppin} link={Image.link} />); })}
                                    {/* <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} /> */}
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </GalerieStyled>
        )
    }
}

export default connect()(PageGalerie);