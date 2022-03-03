import React from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Result/>
      </header>
    </div>
  );
}

export default App;
