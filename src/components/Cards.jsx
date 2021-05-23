import React, { useEffect } from 'react'
import { CardItem } from './CardItem';
import '../Cards.css';
import FeatureImage5 from '../images/proOnliPc.jpg'
import FeatureImage6 from '../images/ShoesCard.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper/core';

  SwiperCore.use([EffectCoverflow,Pagination]);

export const  Cards = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
            <div className="cards">
                <h1 data-aos= "fade-up">Projects</h1>
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
            <div className="wave">
                <div className= "wave__effect"><svg className= "viewBox" viewBox="0 0 500 150" preserveAspectRatio="none"><path className= "Path" d="M0.00,49.98C266.08,172.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00Z"></path></svg></div>
            </div>
            </div>          
            
    )
}
