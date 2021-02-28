import React, { Component } from 'react';
import AboutStyled from './style';
import AcceuilImages from '../../components/acceuil-images/index';
import ButtonBar from '../../components/buttons-bar/index';
import { connect } from "react-redux";
import PhotoAbout from "../../datas/images/photoAbout.png";


export class PageAbout extends Component {
  render() {
    const buttons = ["Home", "Galerie", "Shop", "About", "Contact"];
    return (
      <AboutStyled>
        {/* <img src={AcceuilImage}/> */}
        <div class="about-perso">
          <div>
            <div className="photo-about">
              <img src={PhotoAbout}/>
            </div>
            <div className="presentation-perso">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div className="presentationTravail">
        </div>

      </AboutStyled>
    );
  }
}

export default connect()(PageAbout);