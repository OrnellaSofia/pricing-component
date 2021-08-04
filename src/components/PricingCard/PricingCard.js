import React from 'react';
import './PricingCard.css';
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton';
import Descriptions from '../Descriptions/Descriptions';

export const PricingCard = (props) => {

    return(
        <div class="card-container">
            <h2 class="card-title">{props.title}</h2>
            <h3 class="card-price">{'$' + props.price}</h3>
            <Descriptions />
            <LearnMoreButton />
        </div>
    )
};

export default PricingCard;