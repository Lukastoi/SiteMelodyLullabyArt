import React, { Component } from 'react';
import HeaderStyled from './style';
import ButtonBar from "../../components/buttons-bar/index";

class Header extends Component {
    render() {
        const buttons = ["Home", "Galerie", "Shop", "About", "Contact"];
        return (
            <HeaderStyled>
                <h1>
                    Melody Lullaby Art
                </h1>
                <ButtonBar buttons={buttons}/>
            </HeaderStyled>
        );
    }
}
export default (Header);
