import React from 'react';
import './App.scss'
import Channel from './containers/channel/index.js'
import AddChannel from './containers/addChannel/index.js'
import Login from './login/login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/channel/add" component={AddChannel} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Channel} />
        </Switch>
      </Router>
    )
  }
}

export default App;
