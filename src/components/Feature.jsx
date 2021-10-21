import React from 'react';
import { FeatureBox } from './FeatureBox';
import { Swiper, SwiperSlide } from "swiper/react";
import FeatureImage from 'assets/images/react-2.svg';
import FeatureImage2 from 'assets/images/nodejs-1.svg';
import FeatureImage3 from 'assets/images/mongodb-icon-1.svg';
import FeatureImage5 from 'assets/images/css3-logo-svgrepo-com.svg';
import FeatureImage6 from 'assets/images/python-icon.svg';
import FeatureImage7 from 'assets/images/sass-lang-icon.svg';
import FeatureImage8 from 'assets/images/html5-svgrepo-com.svg';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Feature = () => {

    return (
        <div id="features">
            <h3>My Stack</h3>
            <div className="container" data-aos= "fade-up">
                <Swiper slidesPerView={1} spaceBetween={30} navigation={true} loop={true}
                    breakpoints={{
                        "640": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 4,
                            "spaceBetween": 50
                        }
                    }} className="mySwiper">
                    <SwiperSlide><FeatureBox image={FeatureImage8} title="HTML5" /></SwiperSlide>
                    <SwiperSlide><FeatureBox image={FeatureImage5} title="CSS3" /></SwiperSlide>
                    <SwiperSlide><FeatureBox image={FeatureImage2} title="Node.js" /></SwiperSlide>
                    <SwiperSlide><FeatureBox image={FeatureImage} title="React" /></SwiperSlide>
                    <SwiperSlide><FeatureBox image={FeatureImage3} title="MongoDB" /></SwiperSlide>
                    <SwiperSlide><FeatureBox image={FeatureImage7} title="Sass" /></SwiperSlide>
                    <SwiperSlide><FeatureBox image={FeatureImage6} title="Python" /></SwiperSlide>
                </Swiper>

            </div>
            <div className="wave">
                <div className="wave-effect__contact"><svg className="viewBox__contact" viewBox="0 0 500 150" preserveAspectRatio="none"><path className="Path__contact" d="M0.00,49.98C266.08,172.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00Z"></path></svg></div>
            </div>
        </div>
    )
}

export default Feature