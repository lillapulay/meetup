import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When the user hasn\'t specified the number of events 32 events is shown by default', ({ given, when, then }) => {
    given('user hasn\'t specified the number of events', () => { });
    let AppWrapper;

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('by default 32 events will be displayed', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.Event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies the number of events', () => {
      const eventNumber = { target: { value: 5 } };
      AppWrapper.find('.NumberOfEvents').simulate('change', eventNumber);
    });

    then('this number of events will be displayed', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('number')).toBe(32);
    });
  });
});