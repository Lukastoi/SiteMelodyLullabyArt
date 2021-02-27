import React, { Component } from 'react';
import StyledImagesAcceuil from './style';
import {connect} from 'react-redux'

import AcceuilImage from "../../datas/images/acceuilV2.png";
import AcceuilImage2 from "../../datas/images/acceuilV1.png";
import AcceuilImage3 from "../../datas/images/acceuilV1.png";

import Images, { SwitchDroit } from "../../datas/images/images-acceuil/index";

import * as helper from "../../datas/images/images-acceuil/index";

import GrandeImage from "./grande-image/index";
import PetiteImage from "./petites-images/index";

import Arrow from "../arrows/index";


class AcceuilImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listImages: Images(),
        }
        this.onClickDroit = this.onClickDroit.bind(this);
    }

    onClickDroit = () => {
        const { listImages } = this.state;
        this.setState({
            listImages: helper.SwitchDroit(listImages),
        })
    }

    onClickGauche = () => {
        const { listImages } = this.state;
        this.setState({
            listImages: helper.SwitchGauche(listImages),
        })
    }

    render() {
        console.log("Images", Images());
        const { listImages } = this.state;
        return (
            <StyledImagesAcceuil>
                <div>
                    <Arrow Sens="left" CallBack={this.onClickGauche} />
                    <PetiteImage Image={listImages[0].img} />
                    <GrandeImage Image={listImages[1].img} />
                    <PetiteImage Image={listImages[2].img} />
                    <Arrow Sens="right" CallBack={this.onClickDroit} />
                </div>

            </StyledImagesAcceuil>
        );
    }
}
export default connect()(AcceuilImages);