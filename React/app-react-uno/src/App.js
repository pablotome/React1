import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cliente from './components/Cliente';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}*/

function HolaMundo(props)
{
  return (
    <div>
      <h1>Hola {props.nombre}</h1>
    </div>
  );
}

const Saludo = (props) => {
  return <h2>Hasta mañana {props.nombre}</h2>
}

function App(props) {
  return (
    <div>
      <div>
        <HolaMundo nombre="Pepe"/>
      </div>
      <Cliente/>
      <div>
        <Saludo nombre="Anita"/>
      </div>
    </div>
  );
}

export default App;
