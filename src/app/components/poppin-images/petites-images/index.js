import React from 'react';

import StyledPetiteImage from './style';
import Image1 from "../../../datas/images/images-acceuil/acceuilV1.png";

export const PetiteImage = (props) =>{
    return (
        <StyledPetiteImage>
            <img className="" src={props.Image} alt="Problème avec le chargement de l'image"/>
        </StyledPetiteImage>
    );
}

export default PetiteImage;