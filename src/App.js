import React, { Component } from 'react';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';

import logoTitle from "./img/logotitle.png";
import personalLogo from "./img/lilla-pulay-logo.png";

class App extends Component {

  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
    warningText: ''
  }

  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({ warningText: 'You are currently offline. Connect to the internet to perform a new search.' });
    } else {
      this.setState({ warningText: '' })
    }

    if (lat && lon) {
      getEvents(lat, lon, this.state.page)
        .then(events => this.setState({ events, lat, lon })
        );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page)
        .then(events => this.setState({ events, page })
        );
    } else {
      getEvents(this.state.lat, this.state.lon, page)
        .then(events => this.setState({ events })
        );
    }
  }

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();

    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count });
    }
    return next7Days;
  }

  render() {
    return (
      <div className="App">
        <a href="https://lillapulay.dev" target="_blank" rel="noopener noreferrer">
          <img className="personalLogo" src={personalLogo}
            alt="Developer logo" />
        </a>
        <div>
          <img className="logoTitle" src={logoTitle}
            alt="MeetUp App logo" />
        </div>
        <h4 id="adventureTitle">Where will your next adventure take you?</h4>
        <div className="searchArea" >
          <CitySearch updateEvents={this.updateEvents} />
          <NumberOfEvents updateEvents={this.updateEvents} />
          <WarningAlert className="warningText" text={this.state.warningText} />
        </div>
        <h4 id="upcomingTitle">Upcoming events in the next 7 days</h4>
        <ResponsiveContainer height={400}>
          <ScatterChart
            className="chart"
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <h4 id="allTitle">All events</h4>
        <EventList events={this.state.events} />
        <span id="photoCredit">
          Photo by <a href="https://unsplash.com/@nightwxnderer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Crystal C
            </a>
        </span>
      </div>
    );
  }
}

export default App;