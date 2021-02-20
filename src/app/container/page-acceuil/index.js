import React, {Component} from 'react';
import AcceuilStyled from './style';
import AcceuilImages from '../../components/acceuil-images/index';
import ButtonBar from '../../components/buttons-bar/index';

export class PageAcceuil extends Component{
  render(){
    const buttons = ["Home", "Galerie", "Shop", "About", "Contact"];
    return(
      <AcceuilStyled>
        <ButtonBar buttons={buttons}/>
        {/* <img src={AcceuilImage}/> */}
        <AcceuilImages/>
      </AcceuilStyled>
    );
  }
}

export default (PageAcceuil);