// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';


function App() {
  return (
    <div className="my-5">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
