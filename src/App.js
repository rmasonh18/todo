/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun May 16 2021
 *
 * Filename: App.js
 *
 * Copyright (c) 2021 Bujisoft
 */

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://jacquelinetaylorandfriends.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jacqueline Taylor & Friends
        </a>
      </header>
    </div>
  );
}

export default App;
