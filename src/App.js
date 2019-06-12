import React, { Component } from 'react'
import CreateLogin from './Pages/CreateLogin'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={CreateLogin} />
        </Switch>
      </Router>
    )
  }
}

export default App
