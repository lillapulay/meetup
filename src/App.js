import React, { Component } from 'react';

import './App.css';

import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
  }

  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
        <NumberOfEvents events={this.state.events} />
      </div>
    );
  }
}

export default App;