import React from 'react';
{/*
  Chance is a minimalist generator of random strings, numbers, etc. to
  help reduce some monotony particularly while writing automated tests or
  anywhere else you need anything random. (http://chancejs.com)
  Before continuing run npm install chance --save
*/}
import Chance from 'chance';

import Person from './Person';
import AddToList from './AddToList';

const people = [];

for(let i = 0; i < 10; i++) {
    people.push({
        id: i,
        name: chance.first(),
        country: chance.country({full: true})
    });
}

export default class App extends React.Component {
    constructor(props) {
       super(props);

       this.state = {
           people
       } 
        
       this.addToList = personToAdd => {
           let people = this.state.people;

           people.push({
               id: people.length,
               name: personToAdd.name,
               country: personToAdd.country
           });

           this.setState({
               people
           });

           // Just for kicks...
           localStorage.people = JSON.stringify(this.state.people);
           console.log(localStorage.people);
       }
    }

    
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>{this.props.title}</h1>
                {/* Output each person in the people array */}
                {this.state.people.map(person => (
                    <Person key={person.id} name={person.name} country={person.country} />
                ))}
                <AddToList onSubmit={this.addToList} />
            </div>
        )
    }
}