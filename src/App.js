import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { HashRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <br />

        <Route path="/" component={Main} />
      </div>
    </HashRouter>
  );
}

export default App;
