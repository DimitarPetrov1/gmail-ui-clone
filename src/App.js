import React from 'react';
import './css/app.css';
import Header from './Header';
import Emails from './Emails';
import Aside from './Aside';

function App() {
  return (
    <div className="app">
      <Aside />
      <div className="right-container">
        <Header />
        <Emails />
      </div>
    </div>
  );
}

export default App;
