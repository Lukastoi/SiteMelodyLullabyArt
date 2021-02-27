import React, { Component } from 'react';
import logo from '../logo.svg';
import Application from './style';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Routes from './routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import Loader from './components/loader/index';
import { ApplicationStyled } from './style';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <ApplicationStyled>
        <Header />
        <Routes />
        <Footer />
      </ApplicationStyled>
    );
  }
}



export default connect()(App);
