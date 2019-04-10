import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';

import './styles/style.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Programs from './components/Programs';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Speakers />
        <Programs />
        <Footer />
      </Fragment>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot />, mountNode);