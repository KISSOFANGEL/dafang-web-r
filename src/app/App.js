import React from 'react';
import './App.scss'
import Channel from './containers/channel/index.js'
import {
  BrowserRouter as Router,

} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timeID = setInterval(() =>
      this.setState({ date: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeID)
  }
  tick() {
    this.setState({ date: new Date() })
  }
  render() {
    return (
      <Router>
        <Channel />
      </Router>
    )
  }
}

export default App;
