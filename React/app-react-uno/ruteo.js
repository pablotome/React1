import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit11111 <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
)

const footer = () => (
  <header>footer</header>
)

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={header}></Route>
        <Route exact path='/footer' component={footer}></Route>
      </Router>
    </div>
  );
}

export default App;
