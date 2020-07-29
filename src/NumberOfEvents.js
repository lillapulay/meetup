import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    number: 32
  }

  onNumberChanged = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <label>
          Number of Events:
        </label>
        <input
          type="number"
          className="numberOfEvents"
          value={this.state.number}
          onChange={this.onNumberChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;