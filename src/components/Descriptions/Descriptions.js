import React from 'react';
import './Descriptions.css';

export const Descriptions = (props) => {
    return(
        <div className="description-container">
            {props.features.map(feature => {
                return(
                    <li>{feature}</li>
                )
            })}
        </div>
    )
};

export default Descriptions