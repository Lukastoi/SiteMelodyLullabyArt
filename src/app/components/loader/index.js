import React, { Component } from "react";
import LoaderStyled from './style';
import logo from '../../../logo.svg';

class Loader extends Component {
    render() {
        return (
            <LoaderStyled>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                </a>
                </header>
            </LoaderStyled>
        );
    }
}
export default (Loader);