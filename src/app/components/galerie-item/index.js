import React, { useState } from 'react';
import GalerieItemStyled from './style';

function GalerieItem(props) {
    return (
        <GalerieItemStyled className="article-item">
            <figure>
                <button className="buttonGalerieImage" onClick={(e)=>props.callback(e)}>
                    <img src={props.imageSrc} alt={props.altImage} width="100%" />
                </button>
            </figure>
            
        </GalerieItemStyled>
    );
}

export default GalerieItem;