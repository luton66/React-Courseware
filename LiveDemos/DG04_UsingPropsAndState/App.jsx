import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stateText: `This is state text`,
      stateNumber: 100
    };

    //this.update = this.update.bind(this);
  }

  update = () => {
      let stateNumber = this.state.stateNumber;
      stateNumber *= stateNumber;
      this.setState({
        stateText: `stateText has been update, as has stateNumber`,
        stateNumber
      });
  }
  

  render() {

    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <article>
          <h2>Article Header</h2>
          <p>{this.props.contentProp}</p>
          <p>Value of numberProp is {this.props.numberProp}</p>
          <AnotherComponent 
            valueIWantToPass="I want to pass this..." 
            someContentProp={this.props.contentProp}
            someDataFromState={this.state.stateNumber}
          />
          <p>stateText is: {this.state.stateText}</p>
          <p>numberProp * stateNumber = {this.props.numberProp * this.state.stateNumber}</p>
          <button onClick={this.update.bind(this)}>Click to update state</button>
        </article>
      </div>
    );
  }
}

// const App = (props) => (
//     <div>
//       <h1>{props.headerProp}</h1>
//       <article>
//         <h2>Article Header</h2>
//         <p>{props.contentProp}</p>
//         <p>Value of numberProp is {props.numberProp}</p>
//         <AnotherComponent 
//           valueIWantToPass="I want to pass this..." 
//           someContentProp={props.contentProp}
//         />
//       </article>
//     </div>
// );

const AnotherComponent = (props) => (
  <React.Fragment>
    <p>{props.valueIWantToPass}</p>
    <p>{props.someContentProp}</p>
    <p>The number from my parent's state was: {props.someDataFromState}</p>
  </React.Fragment>
);

App.defaultProps = {
  headerProp: "Header from defaultProps",
  contentProp: "Content from defaultProps"
};

App.propTypes = {
  headerProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string,
  numberProp: PropTypes.number.isRequired
};

export default App;