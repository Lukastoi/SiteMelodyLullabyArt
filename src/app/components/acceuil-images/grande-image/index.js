import React from 'react';

import StyledGrandeImage from './style';

export const GrandeImage = (props) =>{
    return (
        <StyledGrandeImage>
            <img className="mainImg" src={props.Image}/>
        </StyledGrandeImage>
    );
}

export default GrandeImage;