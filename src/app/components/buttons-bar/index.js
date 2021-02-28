import React, { Component } from "react";
import ButtonBarStyled from './style';
import { connect } from "react-redux"
import {compose } from "redux"
import { useHistory } from "react-router-dom";
import { withRouter} from 'react-router-dom'

class ButtonBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHomeSelected: false,
        };

        this.onMouseOverEvent = this.onMouseOverEvent.bind(this);
        this.onClickCallBack = this.onClickCallBack.bind(this);
    }
    onMouseOverEvent = (e) => {
        console.log("TEXT :: ", e.position);
        this.setState({
            isHomeSelected: true,
        })
    }
    onMouseOutEvent = (e) => {
        console.log("TEXT :: ", e.position);
        this.setState({
            isHomeSelected: false,
        })
    }
    onClickCallBack = (event, buttonText) => {
        console.log("href :: ", buttonText.href)

        this.props.history.push(buttonText.href)
    }
    render() {
        const { buttons } = this.props;
        return (
            <ButtonBarStyled>
                {buttons.map(buttonText => {
                    return (
                        <div>
                            <button onClick={(e) => { return this.onClickCallBack(e, buttonText) }}>
                                {buttonText.titre}
                            </button>
                        </div>
                    );
                })}
            </ButtonBarStyled>
        );
    }
}
export default compose(withRouter, connect())(ButtonBar);