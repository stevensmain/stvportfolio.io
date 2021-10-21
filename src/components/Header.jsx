import React from 'react'
import { Nav } from './Nav'
import headerimg from 'assets/images/head.png';
import pdfFile from 'assets/Document/StivensCV.pdf'


const Header = () => {

    return (
        <div id="main">
            <Nav />
            <div className="header__content" id="hero">
                <div className="name" data-aos="fade-up">
                    <h1>Hi, my name is <span>Stivens Carrasquel</span></h1>
                    <p className="details">I´m a Senior Technical in Computer Science. Currenttly, I´m a Frontend Javascript Developer focused on build accesible human-centered products.</p>
                    <a href={pdfFile} className="cv-btn" download>Read more</a>
                </div>
                <div className="header-image" data-aos="fade-up">
                    <img src={headerimg} alt="about__image" />
                </div>
            </div>
            <div className="wave">
                <div className="wave__effect"><svg className="viewBox" viewBox="0 0 500 150" preserveAspectRatio="none"><path className="Path" d="M0.00,49.98C266.08,172.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00Z"></path></svg></div>
            </div>
        </div>
    )
}

export default Header