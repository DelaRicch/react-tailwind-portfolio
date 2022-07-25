import React from 'react'
import About from './components/About';
import DarkTheme from './components/DarkTheme';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import Nav from './components/Nav';
import ScrollButton from './components/ScrollButton';
import Services from './components/Services';
import Works from './components/Works';

const App = () => {


  return (
    <>
        <div className="font-poppins bg-slate-100 dark:bg-zinc-900">
            <div className='max-w-5xl mx-auto w-11/12'>
                <Nav />
                <DarkTheme />
                <HeroSection />
                <Services />
                <Works />
                <ScrollButton />
                <About />
            </div>
            <Footer />
        </div>
    </>   
  )
}

export default App