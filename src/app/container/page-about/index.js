import React, {Component} from 'react';
import AcceuilStyled from './style';
import AcceuilImages from '../../components/acceuil-images/index';
import ButtonBar from '../../components/buttons-bar/index';
import {connect} from "react-redux";

export class PageAbout extends Component{
  render(){
    const buttons = ["Home", "Galerie", "Shop", "About", "Contact"];
    return(
      <AcceuilStyled>
        {/* <img src={AcceuilImage}/> */}
        <div>
          TEST
          </div>
        
      </AcceuilStyled>
    );
  }
}

export default connect()(PageAbout);