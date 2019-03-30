import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';

import './styles/style.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Footer />
      </Fragment>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot />, mountNode);