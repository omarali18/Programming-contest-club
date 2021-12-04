import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1 className="title">Programming contest by <span className="club">Computing club.</span></h1>
                <p>If you want to take part in this contest, click on Enroll Now.</p>
                <h3>Total budget: 50 million</h3>
            </div>
        </div>
    );
};

export default Header;