import React from 'react';
import './PricingComponent.css';
import PricingCard from '../PricingCard/PricingCard';

export const PricingComponent = (props) => {

    return(
        <div class="component-container">
            {/* acá iria un map */}
            <PricingCard title="Free Plan" price={'0'}/>
            <PricingCard title="Pro Plan" price={'14.99'}/>
        </div>
    )
};

export default PricingComponent;