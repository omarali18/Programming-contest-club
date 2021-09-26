import React from 'react';

const CalculateTotal = (props) => {
    const names = props.name
    // console.log(props.name, "omar");
    let nameIs
    let i = 0
    i++
    /*  for (const name of names) {
         console.log(name);
         nameIs = name
     } */

    return (
        <div>
            <ul>
                <li>{props.name}</li>
            </ul>
        </div>
    );
};

export default CalculateTotal;