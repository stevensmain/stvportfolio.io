import React, {useEffect} from 'react'
import { CardItem } from './CardItem';
import '../Cards.css';
import FeatureImage5 from '../images/proOnliPc.jpg'
import FeatureImage6 from '../images/ShoesCard.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

export const  Cards = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div data-aos= "fade-botton" id= "projects" className= "cards">
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={ FeatureImage5 }
                            text= "proOnlinePc"
                            label= "Go to the Site"
                            href= "https://stevenszyzz.github.io/proonlipc.io/"
                        />

                        <CardItem 
                            src={ FeatureImage6 }
                            text= "Shoes Glassmorphism Cards"
                            label= "Go to the Site"
                            href= "https://stevenszyzz.github.io/shoes-cards/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
