import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Top from './components/Top';
import InputPost from './components/InputPost';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/InputPost" component={InputPost} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
