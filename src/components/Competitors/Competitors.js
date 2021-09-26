import React from 'react';
import "./Competitors.css"

const Competitors = (props) => {
    const { name, age, role, id, img, email, entryFee, department } = props.competitor
    return (
        <div className="competitor-cart">

            <div className="competitor-img">
                <img src={img} alt="" />
            </div>
            <div className="competitor-detail">
                <h2>Name: {name}</h2>
                <p><span>ID:</span> {id}</p>
                <p><span>Role:</span> {role}</p>
                <p><span>Department:</span> {department}</p>
                <p><span>Email:</span> {email}</p>
                <p><span>Age:</span> {age}</p>
                <p><span>EntryFee:</span> {entryFee}</p>
                <button onClick={() => props.participateBtn(props.competitor)}>participate now <i className="fas fa-arrow-circle-right"></i></button>
            </div>

        </div>
    );
};

export default Competitors;