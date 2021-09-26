import React from 'react';
import CalculateTotal from '../CalculateTotal/CalculateTotal';
import "./AddStudent.css"

const AddStudent = (props) => {
    const person = props.person;
    let entryFeeTotal = 0
    let nameIs = []
    for (const key of person) {
        const { name, entryFee } = key
        entryFeeTotal += entryFee
        nameIs.push(name)
    }
    return (
        <div className="participate">
            <h2><span><i className="fas fa-user"></i> Student added:</span> {person.length}</h2>
            <h2><span>Entry fee total:</span> {entryFeeTotal}</h2>
            {/* show participate person  */}
            {
                nameIs.map(name => <CalculateTotal name={name} key={name} />)
            }
        </div>
    );
};

export default AddStudent;