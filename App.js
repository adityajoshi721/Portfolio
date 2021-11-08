import * as React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Socials from './components/Socials';
import Tech from './components/Tech';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    < Hero/>
    <About/>
    <Socials/>
    <Tech/>
    <Footer/>
    </>
  );
}

export default App;
