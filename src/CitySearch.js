import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: 'Munich',
    suggestions: [
      {
        city: 'Munich',
        country: 'de',
        localized_country_name: 'Germany',
        name_string: 'Munich, Germany',
        zip: 'meetup3',
        lat: 48.14,
        lon: 11.58
      },
      {
        city: 'Munich',
        country: 'us',
        localized_country_name: 'USA',
        state: 'ND',
        name_string: 'Munich, North Dakota, USA',
        zip: '58352',
        lat: 48.66,
        lon: -98.85
      }
    ]
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  }

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul
          className="suggestions">
          {this.state.suggestions.map(item =>
            <li key={item.name_string}>
              {item.name_string}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;