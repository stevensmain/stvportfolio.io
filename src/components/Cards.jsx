import React from 'react'
import { CardItem } from 'components/CardItem';
import { projects } from 'data/projects'

const Cards = () => {

    return (
        <div id='projects' className="cards">
            <h1 data-aos="fade-up">Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {
                            projects.map(project => (
                                <CardItem
                                    src= {project.img}
                                    text={project.text}
                                    label={project.label}
                                    href={project.href}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="wave">
                <div className="wave__effect"><svg className="viewBox" viewBox="0 0 500 150" preserveAspectRatio="none"><path className="Path" d="M0.00,49.98C266.08,172.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00Z"></path></svg></div>
            </div>
        </div>

    )
}

export default Cards