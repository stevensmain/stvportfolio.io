import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import aboutImg  from '../images/aboutNew.png';

export const About = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos= "fade-up" id= "about" className= "about-me">
                <div className= "about-text">
                    <h3>About Me</h3>
                    <p className = "details">My name is Stivens Carrasquel. I´m a 22 years old Frontend Javascript Developer. My interest in web development started back in 2017 when I know the online education platform Platzi. 

                    My main focus these days is building accessible, inclusive products and digital experiences. Currently focused on Javascript Technologies; such as React, Node, ES6, MondoDB, among others.</p>
                </div>
                <div className= "about-shadow">
                    <div className="about-image">
                        <img src= { aboutImg } alt="about__image" />
                    </div>
                </div>
                    <div className="wave">
                <div className= "wave-effect__about"><svg className= "viewBox__about" viewBox="0 0 500 150" preserveAspectRatio="none"><path className= "Path__about" d="M0.00,49.98C266.08,172.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00Z"></path></svg></div>
            </div>
        </div>
    )
}
