import React from 'react';

class App2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: `Default value`
        }
    

        this.handleSubmit = event => {
            event.preventDefault();
            console.log(`A value was submitted: ${this.state.value}`);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" defaultValue={this.state.value} ref={input => this.input = input}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default App2;