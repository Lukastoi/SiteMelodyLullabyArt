import React, { useState } from 'react';
import { connect } from 'net';
import GaleriePoppinStyled from './style'

function GaleriePoppin(props) {
    const { image, description, nom, linkToInsta } = props;
    console.log("IMAGE :: ", image);
    return (
        <GaleriePoppinStyled>
            <button className="button-close" onClick={props.callback}>X</button>
            <div className="divImgDesc">
                <div className="imgPoppinDiv">
                    <img src={image} className="imgPoppin" />
                </div>
                <div className="divDescription">
                    <p>
                        {props.description}
                    </p>
                    <a href="https://google.com">Instagram</a>
                </div>
            </div>
        </GaleriePoppinStyled>
    );
}
export default (GaleriePoppin)