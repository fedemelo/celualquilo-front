import React from 'react';
import './css/App.css';
import Banner from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />

      <header className="App-header">
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

      <Footer />
    </div>
  );
}

export default App;
