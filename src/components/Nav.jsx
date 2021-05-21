import React, {useState} from 'react'
import logo from '../images/stvLogo.png';
import { Link } from 'react-scroll';

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
            <Link to="main" smooth={true} duration={2000} className= 'logo'>
                <img src={logo} alt=""/>
            </Link>
            <input type="checkbox" className= "menu-btn" id= "menu-btn"/>
            <label className= "menu-icon" for= "menu-btn">
                <span className= "nav-icon"></span>
            </label>
            <ul className= "menu">
                <li href= ""><Link to="about" smooth={true} duration={2000}>About Me</Link></li>
                <li href= ""><Link to="projects" smooth={true} duration={2000}>Projects</Link></li>
                <li href= ""><Link to="features" smooth={true} duration={2000}>Stack</Link></li>
                <li href= ""><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
            </ul>
        </nav>
    )
}
