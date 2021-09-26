import React from 'react';
import CalculateTotal from '../CalculateTotal/CalculateTotal';

const AddStudent = (props) => {
    const person = props.person;
    let entryFeeTotal = 0
    let nameIs = []
    let ami
    for (const key of person) {
        const { name, entryFee } = key
        entryFeeTotal += entryFee
        nameIs.push(name)
        ami = name
    }
    return (
        <div>
            <h2>Entry fee total: {entryFeeTotal}</h2>
            {
                nameIs.map(name => <CalculateTotal name={name} key={name} />)
            }
            {/* <CalculateTotal name={ami} /> */}
        </div>
    );
};

export default AddStudent;