import React, {useEffect} from 'react'
import { Nav } from './Nav'
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, []);
    return (
        <div id= "main">
            <Nav />
            <div className= "name">
                <h1 data-aos="fade-left" >Hi, my name is <span>Stivens Carrasquel</span></h1>
                <p data-aos="fade-left" className = "details">I´m a Senior Technical in Computer Science. Currenttly, I´m a Frontend Javascript Developer focused on build accesible human-centered products.</p>
                <a href="#about" className= "cv-btn">Read More</a>
            </div>
        </div>
    )
}
