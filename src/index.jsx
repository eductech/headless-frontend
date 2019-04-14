import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';

import fetchPage from './dataService';

import Header from './components/Header';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Programs from './components/Programs';
import Footer from './components/Footer';

import './styles/style.scss';

class App extends React.Component {
  state = {};

  componentDidMount () {
    this._fetchConfig();
    document.querySelector('#app').classList.remove('loading');
  }

  async _fetchConfig () {
    const config = await fetchPage();
    this.setState({ config });
  }

  _renderSkeleton () {
    return (
      <div>loading...</div>      
    );
  }

  render() {
    const { config } = this.state;

    if (!config) {
      return this._renderSkeleton();
    }

    console.log(config);

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