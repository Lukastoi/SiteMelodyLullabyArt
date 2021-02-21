import React, { Component } from "react";
import StyledLeftArrow from './style';
import Left from "../../../datas/images/icons/left-arrow.png"


const LeftArrow = (props) => {
    return (
        <StyledLeftArrow>
            <a onClick={props.CallBack}>
            <img src={Left}/>
            </a>
        </StyledLeftArrow>
    );
}

export default LeftArrow;