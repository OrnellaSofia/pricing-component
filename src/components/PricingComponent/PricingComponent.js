import React from 'react';
import './PricingComponent.css';
import PricingCard from '../PricingCard/PricingCard';

export const PricingComponent = (props) => {
    return(
        <div className="component-container">
            {props.plans.map(plan => {
                return(
                    <PricingCard 
                        title={plan.title} 
                        price={plan.price}
                        features={plan.features}
                    />
                )
            })}
        </div>
    )
};

export default PricingComponent;