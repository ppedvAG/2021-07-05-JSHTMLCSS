import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Greeter } from './App';
import reportWebVitals from './reportWebVitals';

// Nach dem Aufruf einer React-Komponente wird ein React-Element zurückgegeben.
const appVariable = App();
console.log("appVariable: ", appVariable);

ReactDOM.render(
    <React.StrictMode>
        {/*Aufruf einer Funktion, die eine React-Komponente ist: */}
    {appVariable}
    {/* Auch mehrere Elemente dürfen hier stehen: */}
    {/* <Greeter /> */}
        {/* Kommentar in JSX / TSX Bereich */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
