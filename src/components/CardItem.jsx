import React from 'react';

export const CardItem = (props) => {
    return (
        <>
            <li className="cards__item">
                    <a href= {props.href} className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category= {props.label} >
                        <img 
                        src={props.src} 
                        alt="ALT" 
                        className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                    </a>
            </li>
        </>
    )
}
