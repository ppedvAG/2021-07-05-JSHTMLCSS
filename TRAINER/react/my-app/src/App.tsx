import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';

// Legen Sie eine neue React-Komponente an. Sie hei�t Greeter. 
// Diese Komponente wird durch die Komponente App aufgerufen / gerendert.
// Komponente Greeter begr��t den Benutzer und zeigt das aktuelle Datum an.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeter />
        <Todos />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
}
export default App;

export function Greeter() {
  const datum = new Date();
  const h2 = <h2>Hallo Du</h2>;
  console.log("h2: ", h2);
  return (
    <div>
      {h2}
      <p>Heute ist: {datum.toLocaleDateString()}</p>
    </div>
  )
}

// F�r React sind Komponenten nur die Funktionen, die html-�hnliche Struktur zur�ckgeben.
/* function anotherFunction() {
    return 'spass';
} */


