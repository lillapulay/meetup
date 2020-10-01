import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

class Event extends Component {
  state = {
    expanded: false,
  }

  onDetailsButtonClicked = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    const event = this.props.event;
    const data = [{
      name: "Taken", value: event.yes_rsvp_count
    }, {
      name: "Available", value: (event.rsvp_limit - event.yes_rsvp_count)
    }];
    const colors = ["#8894B1", "#81354E"];

    return (
      <div className="Event">
        <p className="time">
          {event.local_time} - {event.local_date}
        </p>
        <p className="name">
          {event.name}
        </p>

        {event.group && event.group.name &&
          <p className="group-name">
            Group: {event.group.name}
          </p>}
        <p className="going">
          {event.yes_rsvp_count} people are going
          </p>

        {this.state.expanded &&
          <div className="extra">
            {event.rsvp_limit &&
              <ResponsiveContainer height={150} width={250}>
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={32} label >
                    {
                      data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]} />))
                    }
                  </Pie>
                  <Legend iconSize={12} iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            }

            {event.venue && event.venue.name &&
              <p className="address">
                {event.venue.name
                  + ', ' + event.venue.address_1
                  + ', ' + event.venue.city
                  + ', ' + event.venue.localized_country_name
                }
              </p>
            }
            <div className="description"
              dangerouslySetInnerHTML={{ __html: event.description }} />
            <p className="visibility">
              {event.visibility}
            </p>
            <a className="link"
              href={event.link}
              target="_blank"
              rel="noopener noreferrer">
              Event Link
              </a>
          </div>
        }

        <button className="details-btn"
          onClick={this.onDetailsButtonClicked}>
          Details
          </button>
      </div>
    );
  }
}

export default Event;