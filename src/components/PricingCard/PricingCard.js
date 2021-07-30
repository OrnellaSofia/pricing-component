import React from 'react';
import './PricingCard.css';

export const PricingCard = (props) => {

    return(
        <div class="card-container">
            <h2 class="card-title">{props.title}</h2>
        </div>
    )
};

export default PricingCard;