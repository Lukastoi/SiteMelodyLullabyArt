import React, { Component } from 'react';
import GalerieStyled from './style';
import { connect } from "react-redux";
import GaleriePoppin from "../../components/galerie-poppin/index";
import Image1 from '../../datas/images/images-galerie/Image2.1.png';
import GalerieItem from "../../components/galerie-item/index";

class PageGalerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poppinOpen: false,
        }
        this.callback = this.callback.bind(this);
        this.callBackOpenPoppin = this.callBackOpenPoppin.bind(this);
    }
    callback = () => {
        this.setState({
            poppinOpen: false,
        })
    }

    callBackOpenPoppin = () => {
        this.setState({
            poppinOpen: true,
        })
        console.log("ON EST PASS2 DANS OPEN POPPIN")
    }

    render() {
        const { poppinOpen } = this.state;
        return (
            <GalerieStyled class="container-page-articles" titlePage="Homepage">
                {poppinOpen && <GaleriePoppin callback={this.callback} />}
                <div class="page-articles">
                    <section>
                        
                        <div class="articles-list-wrapper">
                            <section class="">
                                <div class="articles-listing">
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
                                    <GalerieItem imageSrc={Image1} altImage="essai image" sousTitre="soustitre image1" text="blablablbablanalfjldfhljhfl" titre='IMAGE 1' callback={this.callBackOpenPoppin} />
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