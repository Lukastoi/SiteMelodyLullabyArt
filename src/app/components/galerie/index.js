import React, { Component } from "react";

import GalerieStyled from './style';

class Galerie extends Component {
    constructor(props) {
        super(props);
        state = {
            nb_images: 14,
        };
    }
    render() {
        const { nb_images } = this.state;
        const text = "../../datas/images/images-galerie/Image";
        let images = [];
        for (i = 1; i <= nb_images; i++) {
            images.concat({ path: text + i + ".png", index: i });
        }
        return images.map(image => {
            <>
                {image.index === 0 && <ul></ul>}
            </>
        })
    }
}