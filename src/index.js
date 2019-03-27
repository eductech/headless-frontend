import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';

import 'babel-polyfill';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot message="Hello World!" />, mountNode);