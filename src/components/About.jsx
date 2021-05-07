import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import aboutImg  from '../images/aboutImg.png';

export const About = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos= "fade-up" id= "about" className= "about-me">
                <div className= "about-text">
                    <h3>About Me</h3>
                    <p className = "details">My name is Stivens Carrasquel. I am currently 22 years old, I am a Senior Informatics Technician and passionate about web development. Currently focused on Javascript Technologies; such as React, Node, ES6, MondoDB, among others.</p>
                </div>
                <div className= "about-shadow">
                    <div className="about-image">
                        <img src= { aboutImg } alt="about__image" />
                    </div>
                </div>
        </div>
    )
}
