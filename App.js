
import './App.css';
// import Web from './components/web';

// function App() {
//   return (
//     <>
//     <div>
//       <Web/>
//     </div>
//     </>
//   );
// }

// export default App;
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
  }

  handleNum1Change = (e) => {
    this.setState({ num1: parseFloat(e.target.value) });
  }

  handleNum2Change = (e) => {
    this.setState({ num2: parseFloat(e.target.value) });
  }

  calculateSum = () => {
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  render() {
    return (
      <div>
        <h2>Simple Calculator</h2>
        <input
          type="number"
          placeholder="Enter number 1"
          value={this.state.num1}
          onChange={this.handleNum1Change}
        />
        <input
          type="number"
          placeholder="Enter number 2"
          value={this.state.num2}
          onChange={this.handleNum2Change}
        />
        <button onClick={this.calculateSum}>Add</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;

