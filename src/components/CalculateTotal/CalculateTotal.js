import React from 'react';
import "./CalculateTotal.css"

const CalculateTotal = (props) => {
    return (
        <div>
            <ul className="list">
                <li>{props.name}</li>
            </ul>
        </div>
    );
};

export default CalculateTotal;