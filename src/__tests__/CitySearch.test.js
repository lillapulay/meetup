import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';

describe('<CitySearch /> component', () => {
  test('render text input', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('render list of suggestions', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i].name_string);
    }
  });
});