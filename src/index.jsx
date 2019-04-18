import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';

import fetchPage from './dataService';
import { findComponent } from './components/components';

import './styles/style.scss';

class App extends React.Component {
  state = {};

  componentDidMount () {
    this._fetchConfig();
    document.querySelector('#app').classList.remove('loading');
  }

  async _fetchConfig () {
    const { content } = await fetchPage();
    this.setState({ content });
  }

  _renderSkeleton () {
    return (
      <div>loading...</div>      
    );
  }

  _renderComponent = ({ block: blockData }) => {

    const { key, Component, props } = findComponent(blockData);

    if (Component) {
      return <Component key={key} {...props} />
    }
  }

  render() {
    const { content } = this.state;

    if (!content) {
      return this._renderSkeleton();
    }

    console.log(content);
    
    return (
      <Fragment>
        {content.map(this._renderComponent)}
      </Fragment>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot />, mountNode);

// I want to commit that message