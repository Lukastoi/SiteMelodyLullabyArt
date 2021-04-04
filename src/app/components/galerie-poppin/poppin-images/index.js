import React, {  useState } from 'react';
import StyledImagesAcceuil from './style';
import { connect } from 'react-redux'

import ImagesGalerie from "../../../datas/images/images-galerie/index";

import * as helper from "../../../datas/images/images-acceuil/index";

import GrandeImage from "./grande-image/index";
import PetiteImage from "./petites-images/index";

import Arrow from "../../arrows/index";
import { queryHelpers } from '@testing-library/dom';


function PoppinImages(props) {
    const images = ImagesGalerie.map((image, index) => {return { img: image.src, position:index }});
    const [listImages, setListImages] = useState(images);
    const positions =[
        props.index === 0 ? images.length : props.index - 1,
        props.index,
        props.index === images.length ? 0 : props.index + 1, 
    ]
    return (
        <StyledImagesAcceuil>
            <div>
                <Arrow Sens="left" CallBack={() => setListImages(helper.SwitchGauche(listImages))} />
                {/* <PetiteImage Image={listImages[positions[0]].img} /> */}
                <GrandeImage Image={listImages[positions[1]].img} />
                {/* <PetiteImage Image={listImages[positions[2]].img} /> */}
                <Arrow Sens="right" CallBack={() => setListImages(helper.SwitchDroit(listImages))} />
            </div>
        </StyledImagesAcceuil>
    );
}

export default connect()(PoppinImages);