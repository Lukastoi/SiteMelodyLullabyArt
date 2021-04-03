import React, { Component } from 'react';
import HeaderStyled from './style';
import ButtonBar from "../../components/buttons-bar/index";

class Header extends Component {
    render() {
        const {history} = this.props;
        const buttons = [{titre:"Home", href:"/acceuil"}, {titre:"Galerie", href:"/galerie"}, {titre:"Shop", href:""}, {titre:"About", href:"/about"}, {titre:"Contact", href:""}];
        return (
            <HeaderStyled>
                <h1>
                    Melody Lullaby Art
                </h1>
                <ButtonBar history buttons={buttons}/>
            </HeaderStyled>
        );
    }
}
export default (Header);
