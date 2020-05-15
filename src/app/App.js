import React from 'react';
import './App.scss'
import Channel from './containers/channel/index.js'
import {
  BrowserRouter as Router,
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Channel />
      </Router>
    )
  }
}

export default App;
