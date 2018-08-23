// Demo Instruction 29
import React from 'react';
import { connect } from 'react-redux';
// npm package that generates SHA1 unique id
import uuidv1 from 'uuid';
import { addArticle } from '../actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state; // Uses object assignment
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({
            title: ""
        });
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <button type="submit">Save</button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
// first argument must be null here because mapStateToProps is absent
// Stops TypeError from being given
 
export default Form;