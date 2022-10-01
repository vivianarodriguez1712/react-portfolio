// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="my-5">
      <Header/>
      <main>
        <About></About>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
