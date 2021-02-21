
import React, {Component} from 'react';
import StyledArrow from "./style";
import LeftArrow from "./left-arrow/index";
import RightArrow from "./right-arrow/index";

class Arrow extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <StyledArrow>
                {this.props.Sens === "left" && <LeftArrow CallBack={this.props.CallBack}/>}
                {this.props.Sens === "right" && <RightArrow CallBack={this.props.CallBack}/>}
            </StyledArrow>
        );
    }
}

export default Arrow;