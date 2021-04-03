
import React, { Component } from 'react';
import StyledArrow from "./style";
import LeftArrow from "./left-arrow/index";
import RightArrow from "./right-arrow/index";

function Arrow(props) {
    return (
        <StyledArrow>
            {props.Sens === "left" && <LeftArrow CallBack={props.CallBack} />}
            {props.Sens === "right" && <RightArrow CallBack={props.CallBack} />}
        </StyledArrow>
    );
}



export default Arrow;