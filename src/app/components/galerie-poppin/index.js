import React, { useState } from 'react';
import { connect } from 'net';
import GaleriePoppinStyled from './style'
import PoppinImages from './poppin-images/index';

function GaleriePoppin(props) {
    const { image, description, nom, linkToInsta, index } = props;
    console.log("IMAGE :: ", image);
    return (
        <GaleriePoppinStyled>
            <button className="button-close" onClick={props.callback}>X</button>
            {/* <div className="divImgDesc">
                <div className="imgPoppinDiv">
                    <img src={image} className="imgPoppin" />
                </div>
            </div> */}
                <PoppinImages index={index}/>
        </GaleriePoppinStyled>
    );
}
export default (GaleriePoppin)