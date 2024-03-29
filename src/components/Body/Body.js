import React, { useEffect, useState } from 'react';
import AddStudent from '../AddStudent/AddStudent';
import Competitors from '../Competitors/Competitors';
import "./Body.css"

const Body = () => {
    const [competitors, setCompetitors] = useState([]);
    const [persons, setPersons] = useState([])

    // data load form .public/persons.json 
    useEffect(() => {
        fetch("./persons.json")
            .then(res => res.json())
            .then(data => setCompetitors(data))
    }, [])

    let addPersons = []
    let filterPersons = []
    const participateBtn = person => {
        // filter a single person only songle person added 
        const filterPerson = persons.filter(man => man === person)
        if (filterPerson.length === 0) {
            addPersons.push(...persons, person)
            setPersons(addPersons);
        }
        else {
            filterPersons.push(...persons)
            setPersons(filterPersons);

        }

    }


    return (
        <div>
            <div className="competitor-container">
                <div className="competitor-side">
                    {/* show computing club's student  */}
                    {
                        competitors.map(competitor => <Competitors
                            competitor={competitor}
                            key={competitor.id}
                            participateBtn={participateBtn} />)
                    }
                </div>
                {/* add contest student  */}
                <div className="card-side">

                    <AddStudent person={persons} />

                </div>
            </div>
        </div>
    );
};

export default Body;