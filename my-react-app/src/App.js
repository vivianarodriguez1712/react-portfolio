// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/About';
// import Nav from './components/Nav';
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Home from './components/pages/home';
// import "./components/assets/css/style.css";


function App() {
  return (
    <div className="my-5">
      <Header/>
      <main>
        <About></About>
        <Portfolio/>
        <Contact/>
        <Resume/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
