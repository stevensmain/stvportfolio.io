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
        </div>
    )
}
