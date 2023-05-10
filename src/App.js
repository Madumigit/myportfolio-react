import React from 'react';
import './App.css';
import Headernew from './components/header/Headernew';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualificationnew from './components/qualifications/Qualificationnew';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';






function App() {
  return (
    <div>
      
      <Headernew/>

      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualificationnew/>
        <Contact/>
        
       
      
        
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
