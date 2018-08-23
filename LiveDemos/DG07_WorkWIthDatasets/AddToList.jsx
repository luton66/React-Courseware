import React, { Component } from 'react';

class AddToList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ``,
            country: ``
        }

        this.handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        this.handleSubmit = event => {
            event.preventDefault();
            this.props.onSubmit(this.state);
            this.setState({
                name: ``,
                country: ``
            });
        }
    }

    render() {
        return (
            <form id="addPerson" className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    &nbsp;
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                &nbsp;
                <div className="form-group">
                    <label htmlFor="country">Country: </label>
                    &nbsp;
                    <input 
                        type="text" 
                        className="form-control" 
                        name="country"
                        value={this.state.country}
                        onChange={this.handleChange}
                    />
                </div>
                &nbsp;
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}

export default AddToList;