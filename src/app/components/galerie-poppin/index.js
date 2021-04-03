import React, { useState } from 'react';
import { connect } from 'net';
import GaleriePoppinStyled from './style'

function GaleriePoppin(props) {
    return (
        <GaleriePoppinStyled>
            <button onClick={props.callback}>Close</button>
        </GaleriePoppinStyled>
    );
}
export default (GaleriePoppin)