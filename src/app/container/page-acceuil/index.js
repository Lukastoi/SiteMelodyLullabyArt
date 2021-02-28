import React, {Component} from 'react';
import AcceuilStyled from './style';
import AcceuilImages from '../../components/acceuil-images/index';
import ButtonBar from '../../components/buttons-bar/index';
import { connect } from 'react-redux';

export class PageAcceuil extends Component{
  render(){
    return(
      <AcceuilStyled>
        {/* <img src={AcceuilImage}/> */}
        <AcceuilImages/>
      </AcceuilStyled>
    );
  }
}

export default connect()(PageAcceuil);