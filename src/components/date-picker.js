import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import DatePickerComponent from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const [startDate, setStartDate] = useState();
  const nowDate = new Date(); // not performatice but needed
  const handleChange = (date) => {
    console.log('date: ', date);
    if (nowDate > date) console.log('now is bigger');
    if (date > nowDate) console.log('date is bigger');
    setStartDate(date);
  };
  return (
    <Grid>
      <DatePickerComponent
        selected={startDate}
        onChange={handleChange}
        timeInputLabel='Time:'
        dateFormat='MM/dd/yyyy h:mm aa'
        showTimeInput
      />
    </Grid>
  );
};

export default DatePicker;
