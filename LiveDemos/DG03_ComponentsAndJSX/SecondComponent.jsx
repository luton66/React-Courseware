import React from 'react';

const SecondComponent = () => {
    let x = 10;
    let y = 20;
    let z = `un`;
    // Normal comments in code flow

    return (
        <React.Fragment>
            <h3>Second Component</h3>
            <p>10 + 20 = {x + y}</p>
            <p>It is almost time for l{z}ch</p>
            {/* This is a comment inside the return */}
        </React.Fragment>
    );
}

export default SecondComponent;