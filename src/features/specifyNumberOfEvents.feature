Feature: Specify number of events

Scenario: When the user hasn't specified the number of events 32 events is shown by default
  Given user hasn't specified the number of events
  When the user opens the app
  Then by default 32 events will be displayed

Scenario: User can change the number of events they want to see
  Given the user opened the app
  When the user specifies the number of events
  Then this number of events will be displayed