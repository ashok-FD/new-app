import React, { useState } from 'react'

function FunctionState() {
    const [value,setValue] = useState("This is Function State")

    const stateChange = () => {
        setValue(`This is class state value: ${Math.floor(Math.random()*100)}`);
    }

    return (
        <div>
            <p style={{textDecoration:'underline'}}>FunctionState</p>
            <p>{value}</p>
            <button onClick={stateChange}>Change Function State</button>
        </div>
    )
}

export default FunctionState
