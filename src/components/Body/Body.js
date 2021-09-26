import React, { useEffect, useState } from 'react';
import Competitors from '../Competitors/Competitors';
import "./Body.css"

const Body = () => {
    const [competitors, setCompetitors] = useState([]);
    useEffect(() => {
        fetch("./persons.json")
            .then(res => res.json())
            .then(data => setCompetitors(data))
    }, [])


    return (
        <div>
            <div className="competitor-container">
                <div className="competitor-side">
                    {/* show computing club's student  */}
                    {
                        competitors.map(competitor => <Competitors
                            competitor={competitor}
                            key={competitor.id} />)
                    }
                </div>
                {/* add contest student  */}
                <div className="card-side">
                    <h2><i class="fas fa-user"></i> Student added</h2>
                    <h2>Entry fee total</h2>
                </div>
            </div>
        </div>
    );
};

export default Body;