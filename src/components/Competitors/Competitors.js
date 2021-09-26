import React from 'react';
import "./Competitors.css"

const Competitors = (props) => {
    const { name, age, role, id, img, email, entryFee, department } = props.competitor
    console.log(props.competitor);
    return (
        <div className="competitor-card">
            <div className="card">
                <div className="competitor-img">
                    <img src={img} alt="" />
                </div>
                <div className="competitor-detail">
                    <h2>Name: {name}</h2>
                    <p>ID: {id}</p>
                    <p>Role: {role}</p>
                    <p>Department: {department}</p>
                    <p>Email: {email}</p>
                    <p>Age: {age}</p>
                    <p>EntryFee: {entryFee}</p>
                    <button>Inrole</button>
                </div>
            </div>
        </div>
    );
};

export default Competitors;