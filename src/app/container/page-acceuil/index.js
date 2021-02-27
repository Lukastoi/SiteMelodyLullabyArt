import React, {Component} from 'react';
import AcceuilStyled from './style';
import AcceuilImages from '../../components/acceuil-images/index';
import ButtonBar from '../../components/buttons-bar/index';
import { connect } from 'react-redux';

export class PageAcceuil extends Component{
  render(){
    const buttons = ["Home", "Galerie", "Shop", "About", "Contact"];
    console.log("TEST ******************************")
    return(
      <AcceuilStyled>
        <ButtonBar buttons={buttons}/>
        {/* <img src={AcceuilImage}/> */}
        <AcceuilImages/>
      </AcceuilStyled>
    );
  }
}

export default connect()(PageAcceuil);