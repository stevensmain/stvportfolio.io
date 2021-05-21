import React, {useEffect} from 'react';
import { FeatureBox } from './FeatureBox';
import FeatureImage from '../images/react-2.svg';
import FeatureImage2 from '../images/nodejs-1.svg';
import FeatureImage3 from '../images/mongodb-icon-1.svg';
import FeatureImage4 from '../images/tailwind-css-1.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const Feature = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div data-aos= "fade-up" id = "features">
                <h3>My Stack</h3>
            <div className="container">
                <FeatureBox image= {FeatureImage3} title= "MongoDB"/>
                <FeatureBox image= {FeatureImage4} title= "TailWind CSS"/>
                <FeatureBox image= {FeatureImage} title= "React"/>
                <FeatureBox image= {FeatureImage2} title= "Node.js"/>
            </div>
            <div className="wave">
            <div className= "wave-effect__contact"><svg className= "viewBox__contact" viewBox="0 0 500 150" preserveAspectRatio="none"><path className= "Path__contact" d="M0.00,49.98C266.08,172.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00Z"></path></svg></div>
            </div>
        </div>
    )
}
