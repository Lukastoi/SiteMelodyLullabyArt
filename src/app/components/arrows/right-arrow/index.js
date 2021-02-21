import React, { Component } from "react";
import StyledRightArrow from './style';
import Right from "../../../datas/images/icons/right-arrow.png";

const RightArrow = (props) => {
    return (
        <StyledRightArrow>
            <a onClick={props.CallBack}>
            <img src={Right} alt="Probleme chargement image"/>
            </a>
        </StyledRightArrow>
    );
}

export default RightArrow;