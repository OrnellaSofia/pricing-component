import React from 'react';
import './TogglePrice.css';

export const ToggglePrice = () => {
    return(
        <div className="toggle-container">
            <div className="annual-plan">Annual Plan</div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
};

export default ToggglePrice;