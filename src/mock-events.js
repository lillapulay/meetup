const mockEvents = {
  city: {
    id: 1007700,
    city: 'München',
    lat: 48.14,
    lon: 11.58,
    state: '',
    country: 'de',
    zip: 'meetup3',
    member_count: 1257
  },
  events: [
    {
      created: 1591348394000,
      duration: 385200000,
      id: '271099242',
      name: 'International JavaScript Conference Munich 2020',
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1603695600000,
      local_date: '2020-10-26',
      local_time: '08:00',
      updated: 1591348394000,
      utc_offset: 3600000,
      waitlist_count: 0,
      yes_rsvp_count: 13,
      venue: {
        id: 26495814,
        name: 'Holiday Inn München - Stadtzentrum',
        lat: 48.13063049316406,
        lon: 11.589532852172852,
        repinned: false,
        address_1: 'Hochstraße 3',
        city: 'München',
        country: 'de',
        localized_country_name: 'Germany'
      },
      is_online_event: false,
      group: {
        created: 1497515784000,
        name: 'International JavaScript Conference',
        id: 24474394,
        join_mode: 'approval',
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: 'International-JavaScript-Conference',
        who: 'Mitglieder',
        localized_location: 'München, Germany',
        state: '',
        country: 'de',
        region: 'en_US',
        timezone: 'Europe/Berlin'
      },
      link: 'https://www.meetup.com/International-JavaScript-Conference/events/271099242/',
      description: '<p>Every year in October, International JavaScript Conference Munich is where seasoned experts get together to discuss methods, libraries, services, models and algorithms to use. We are looking forward to meeting you this year as well!</p> ',
      visibility: 'public',
      member_pay_fee: false
    }
  ]
};

export { mockEvents };