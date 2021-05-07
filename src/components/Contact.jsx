import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div data-aos= "fade-botton" id= "contact">
            <h3>Send Me Email</h3>
            <div className = "contact-input">
                <input   type="email" placeholder= "example@gmail.com"/>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}
