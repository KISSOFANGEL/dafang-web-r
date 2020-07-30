import React from 'react';
import './App.scss'
import Channel from './containers/channel/index.js'
import AddChannel from './containers/addChannel/index.js'
import Login from './login/login.js'
import AddPanel from './containers/addPanel/index.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/channel/add" component={AddChannel} />
          <Route path="/panel/add" component={AddPanel} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Channel} />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App)
