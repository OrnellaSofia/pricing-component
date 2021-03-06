import React from 'react';
import './PricingCard.css';
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton';
import Descriptions from '../Descriptions/Descriptions';

export const PricingCard = (props) => {

    return(
        <div className="card-container">
            <h2 className="card-title">{props.title}</h2>
            <h3 className="card-price">{'$' + props.price}
                <span className="payment-type">/mo.</span>
            </h3>
            <Descriptions features={props.features}/>
            <LearnMoreButton />
        </div>
    )
};

export default PricingCard;