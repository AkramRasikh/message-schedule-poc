import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('user can create, edit and delete a tweet for scheduling', () => {
  render(<App />);
  // check that no tweets are there
  screen.getByText('No Tweets scheduled!');
  // create button opens modal
  fireEvent.click(screen.getByText('Create tweet'));
  screen.getByText('Twitter Message');
  screen.getByText('Date');

  // submit with failed validation -> errors show up
  // sumit success -> collapses modal (and portal?)
  // screen.queryByText('No Tweets scheduled!')
  // repeat process? -> check ascending
  // edit one via date -> still adheres to ascending order
  // deletes all screen.getByText('No Tweets scheduled!')
});
