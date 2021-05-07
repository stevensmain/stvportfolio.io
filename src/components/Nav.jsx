import React, {useState} from 'react'
import logo from '../images/logo1.png';

export const Nav = () => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className = {nav  ? 'nav active' : 'nav'}>
            <a href="#main" className= 'logo'>
                <img src={logo} alt=""/>
            </a>
            <input type="checkbox" className= "menu-btn" id= "menu-btn"/>
            <label className= "menu-icon" for= "menu-btn">
                <span className= "nav-icon"></span>
            </label>
            <ul className= "menu">
                <li href= ""><a href="#about">About Me</a></li>
                <li href= ""><a href="#projects">Projects</a></li>
                <li href= ""><a href="#features">Stack</a></li>
                <li href= ""><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
