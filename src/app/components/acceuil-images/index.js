import React, {  useState } from 'react';
import StyledImagesAcceuil from './style';
import { connect } from 'react-redux'

import AcceuilImage from "../../datas/images/acceuilV2.png";
import AcceuilImage2 from "../../datas/images/acceuilV1.png";
import AcceuilImage3 from "../../datas/images/acceuilV1.png";

import Images from "../../datas/images/images-acceuil/index";

import * as helper from "../../datas/images/images-acceuil/index";

import GrandeImage from "./grande-image/index";
import PetiteImage from "./petites-images/index";

import Arrow from "../arrows/index";
import { queryHelpers } from '@testing-library/dom';


function AcceuilImages(props) {
    const images = Images;
    const [listImages, setListImages] = useState(images);
   
    return (
        <StyledImagesAcceuil>
            <div>
                <Arrow Sens="left" CallBack={() => setListImages(helper.SwitchGauche(listImages))} />
                <PetiteImage Image={listImages[0].img} />
                <GrandeImage Image={listImages[1].img} />
                <PetiteImage Image={listImages[2].img} />
                <Arrow Sens="right" CallBack={() => setListImages(helper.SwitchDroit(listImages))} />
            </div>
        </StyledImagesAcceuil>
    );
}

export default connect()(AcceuilImages);