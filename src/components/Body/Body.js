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
                    {
                        competitors.map(competitor => <Competitors
                            competitor={competitor}
                            key={competitor.id} />)
                    }
                </div>
                <div className="card-side">
                    <h3>Entry fee total</h3>
                </div>
            </div>
        </div>
    );
};

export default Body;