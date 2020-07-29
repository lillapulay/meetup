import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render Event component', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('render "Event" div', () => {
    expect(EventWrapper.find('.Event')).toHaveLength(1);
  });

  test('check if the "Event" div only shows the "eventOverview" div', () => {
    expect(EventWrapper.find('.Event').children()).toHaveLength(1);
  });

  test('render "eventOverview" div', () => {
    expect(EventWrapper.find('.eventOverview')).toHaveLength(1);
  });

  test('render all children of "eventOverview"', () => {
    expect(EventWrapper.find('.eventOverview').children()).toHaveLength(3);
  });

  test('render "showDetails" button', () => {
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  test('simulate click on "showDetails" button', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('mock data as the state of event', () => {
    EventWrapper.setState({
      event: {
        "created": 1575623898000,
        "duration": 9000000,
        "id": "xgqtlrybcmbvb",
        "name": "Sensemakers Internet-of-Things Talks",
        "rsvp_limit": 60,
        "date_in_series_pattern": false,
        "status": "upcoming",
        "time": 1600273800000,
        "local_date": "2020-09-16",
        "local_time": "18:30",
        "updated": 1575623898000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 5,
        "venue": {
          "id": 25722723,
          "name": "Marineterrein Commandantswoning",
          "lat": 52.372432708740234,
          "lon": 4.915308952331543,
          "repinned": false,
          "address_1": "Kattenburgerstraat 5, Commandantswoning",
          "city": "Amsterdam",
          "country": "nl",
          "localized_country_name": "Netherlands"
        },
        "is_online_event": false,
        "group": {
          "created": 1317304778000,
          "name": "Internet-of-Things Sensemakers",
          "id": 2563682,
          "join_mode": "open",
          "lat": 52.369998931884766,
          "lon": 4.889999866485596,
          "urlname": "sensemakersams",
          "who": "Sensemakers",
          "localized_location": "Amsterdam, Netherlands",
          "state": "",
          "country": "nl",
          "region": "en_US",
          "timezone": "Europe/Amsterdam"
        },
        "link": "https://www.meetup.com/sensemakersams/events/xgqtlrybcmbvb/",
        "description": "<p>Every 3th Wednesday of the month we have presentations, open mic &amp; discussions about IoT-related subjects.</p> <p>This evening we have:</p> <p>TBA</p> <p>Doors open at 18.30 at Marineterrein (details will follow) for networking &amp; discussing projects.<br/>Presentations usually start at 19h &amp; end around 20.30 with open mic when you can share your own story/event/question.</p> <p>====================================</p> <p>Everybody is welcome: Technical, non-technical or just interested. If you like to know more, be involved or are just curious: Just come to one of our meetups:<br/>- 1th Wednesday: DIY hands-on at the Makerspace in OBA</p> <p>- 3th Wednesday: Sharing knowledge, ideas &amp; connecting people</p> <p>- Random: Specials (handson workshops), excursions or whatever comes up:-)</p> <p>As we want to bring you interesting speakers, who can share their thoughts, experiences and/or wisdom, we would appreciate you tipping us off when you know or heard about someone!</p> <p>Follow us on twitter </p> <p>or join us on Slack by providing us your emailadress.</p> ",
        "how_to_find_us": "Kattenburgerstraat 5, after you enter the Marineterrein, go to the left and at the end of that street to the right. The commandantswoning (Commanders home) is the last building.",
        "visibility": "public",
        "member_pay_fee": false
      }
    });
    expect(EventWrapper.state('event').name).toBe('Sensemakers Internet-of-Things Talks');
  });
});