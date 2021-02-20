import React from 'react';
import logo from '../logo.svg';
import Application from './style';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Routes from './routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import Loader from './components/loader/index';
import { ApplicationStyled } from './style';

function App() {
  console.log("ESSAI PASSER DANS APP")
  return (
    <Router>
      <ApplicationStyled>
        <Header />
        <Routes />
        <Footer />
      </ApplicationStyled>
    </Router>
  );
}

export default App;
