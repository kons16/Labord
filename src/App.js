import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Top from './components/Top';
import InputPost from './components/InputPost';
import Nav from './components/Nav';

class App extends Component {
  componentDidMount() {
    const result = prompt("パスワードを入力してください");
    if(result !== process.env.REACT_APP_PASS){
      window.onload();
    }
  }

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
