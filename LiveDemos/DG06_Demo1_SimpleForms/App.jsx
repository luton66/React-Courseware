import React from 'react';
import ReactDOM from 'react-dom';


export default class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: ``,
            favColour: ``
        }

        //this.handleChange = this.handleChange.bind(this);
        this.handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        this.handleSubmit = (event) => {
            event.preventDefault();
            console.log(`Submitted: ${this.state.name}, ${this.state.favColour}`);
        }
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name..."
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label htmlFor="favColour">Favourite Colour: </label>
                <input 
                    type="text" 
                    name="favColour" 
                    placeholder="Your favourite colour..."
                    value={this.state.favColour}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}