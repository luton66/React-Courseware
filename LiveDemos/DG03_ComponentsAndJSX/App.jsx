import React from 'react';

import SecondComponent from './SecondComponent';

const App = () => (
    <React.Fragment>
        <h1>Hello World</h1>
        <p>Other elements can be added</p>
        <p>Any JavaScript expression can be within curly braces</p>
        <p>3 + 5 = {3 + 5}{console.log("Hi")}</p>
        <FirstComponent />
        <SecondComponent />
    </React.Fragment>
);

export default App;

class FirstComponent extends React.Component {
    render() {
        let x = 190;
        let y = 2;
        return (
            <React.Fragment>
                <h3>First Component</h3>
                <p>190 * 2 = {x * y}</p>
            </React.Fragment>
        );
    }
}