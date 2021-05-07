import React from 'react'

export const FeatureBox = (props) => {
    return (
                <div className="hexagon">
                    <div className="shape">
                        <img src={props.image} alt= {props.title}/>
                        <div className="text">
                            <div>
                                <h2>{props.title}</h2>
                            </div>
                        </div>
                    </div> 
                </div>
    )
}
