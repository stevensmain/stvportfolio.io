import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';

// Images
import logo from 'assets/images/stvLogo.png';
import useScrollDirection from 'hooks/useScrollDirection';

export const Nav = () => {

    const [nav, setNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const scrollDirection = useScrollDirection('up');
    
    useEffect(() => {
        if (scrollDirection === 'up' || dropdown === true) {
            setNav(true);
        } else if (scrollDirection === 'down' || dropdown === false) {
            setNav(false);
        }
    }, [scrollDirection, dropdown])

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <HashLink to="/#hero" smooth={true} duration={2000} className='logo'>
                <img src={logo} alt="" />
            </HashLink>
            <input type="checkbox" className="menu-btn" id="menu-btn" onChange={handleDropdown}/>
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><HashLink to="/#about" smooth scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center'})} >About Me</HashLink></li>
                <li><HashLink to="/#projects" smooth scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} >Projects</HashLink></li>
                <li><HashLink to="/#features" smooth scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} >Stack</HashLink></li>
                <li><HashLink to="/#contact" smooth scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center'})} >Contact</HashLink></li>
            </ul>
        </nav>
    )
}
