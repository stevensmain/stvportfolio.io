import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare,faFacebookSquare ,faGoogle, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    return (
        <div id= "contact">
            <h3>Contact Me</h3>
            <div className = "contact-input">
                <a className= "email__to" href="mailto:stevensgoldzyzz@gmail.com">Say Hello</a>
            </div>
            <div className="social__medias">
            <ul>
                <li>
                    <a href="https://github.com/stevenszyzz">
                        <FontAwesomeIcon 
                        className= "icons" 
                        icon= {faGithubSquare} 
                        size= '2x' 
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/steve.carrasquel/">
                        <FontAwesomeIcon 
                        className= "icons" 
                        icon= {faFacebookSquare} 
                        size= '2x'
                         />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/stivens-carrasquel-a691391b3/">
                        <FontAwesomeIcon 
                        className= "icons" 
                        icon= {faLinkedinIn} 
                        size= '2x'
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:stevensgoldzyzz@gmail.com">
                        <FontAwesomeIcon 
                        className= "icons" 
                        icon= {faGoogle} 
                        size= '2x'
                        />
                    </a>
                </li>
            </ul>
            </div>
            
        </div>
    )
}

export default Contact