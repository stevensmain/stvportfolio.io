import React from 'react';
import {Header} from "./components/Header";
import {  About } from './components/About';
import { Cards } from './components/Cards';
import { Feature } from './components/Feature';
import { Contact } from './components/Contact';
import './index.css';
import aboutImages from './images/Frame 19.png';
 
function App() {

  return (
    <div className="App">
      <Header />
      <About image= {aboutImages} title= "This is About`s Title" button= "Get the App"/>
      <Cards />
      <Feature />
      <Contact />
    </div>
  );
}

export default App;
