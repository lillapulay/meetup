import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: {},
    showDetails: false
  }

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  }

  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="Event">
        <div className="eventOverview">
          <p className="eventName">
            {this.state.event.name}
          </p>
          <p className="eventLocalDate">
            {this.state.event.local_date}
          </p>
          <button className="showDetails" onClick={() => this.handleShowDetails()}>
            Show Details
            </button>
        </div>
        {showDetails &&
          <div className="eventDetails">
            <p className="eventDescription">
              {this.state.event.description}
            </p>
          </div>
        }
      </div>
    );
  }
}

export default Event;