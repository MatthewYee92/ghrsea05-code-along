import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const { increment, decrement } = this;
    const { count } = this.state;
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <h3>Count: {count}</h3>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

// uncomment

// const Count = () => {
//     // increment count
//     const increment = () => {
//
//     };

//     // decrement
//     const decrement = () => {
//
//     };
//     return (
//       <div>
//         <button onClick={increment}>increment</button>
//         <h3>Count: {count}</h3>
//         <button onClick={decrement}>decrement</button>
//       </div>
//     );
//   };

//   export default Count;
