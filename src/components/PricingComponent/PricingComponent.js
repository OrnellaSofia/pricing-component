import React from 'react';
import './PricingComponent.css';
import PricingCard from '../PricingCard/PricingCard';

export const PricingComponent = (props) => {

    return(
        <div class="component-container">
            <PricingCard title="Free Plan" />
            <PricingCard title="Pro Plan" />
        </div>
    )
};

export default PricingComponent;