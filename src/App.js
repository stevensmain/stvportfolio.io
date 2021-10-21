import React, { useEffect, lazy, Suspense } from 'react';

// Images
import aboutImages from './assets/images/Frame 19.png';

// Styles
import './index.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

import About from './components/About'

// Components 
/* const About = lazy(() => import('./components/About')); */
const Cards = lazy(() => import('./components/Cards'));
const Feature = lazy(() => import('./components/Feature'));
const Header = lazy(() => import('./components/Header'));
const Contact = lazy(() => import('./components/Contact'));

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
        <About image={aboutImages} title="This is About`s Title" button="Get the App" />
        <Cards />
        <Feature />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
