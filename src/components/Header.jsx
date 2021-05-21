import React, {useEffect} from 'react'
import { Nav } from './Nav'
import Aos from 'aos';
import 'aos/dist/aos.css';
import headerimg  from '../images/head.png';


export const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, []);


    return (
        <div id= "main">
            <Nav />
            <div className="header__content">
                <div className= "name">
                    <h1 data-aos="fade-left" >Hi, my name is <span>Stivens Carrasquel</span></h1>
                    <p data-aos="fade-left" className = "details">I´m a Senior Technical in Computer Science. Currenttly, I´m a Frontend Javascript Developer focused on build accesible human-centered products.</p>
                    <a href= './pdf' target='_blank' className= "cv-btn">Read more</a>
                </div>
                <div className="header-image">
                        <img src= { headerimg } alt="about__image" />
                </div>
            </div>
            <div className="wave">
            <div className= "wave__effect"><svg className= "viewBox" viewBox="0 0 500 150" preserveAspectRatio="none"><path className= "Path" d="M0.00,49.98C266.08,172.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00Z"></path></svg></div>
            </div>
        </div>
    )
}
