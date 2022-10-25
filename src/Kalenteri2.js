/*
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Kalenteri from './Kalenteri';

const datesToAddClassTo = [tomorrow, in3Days, in5Days];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
      return 'myClassName';
    }
  }
}

function MyApp() {
  const [value, setValue] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={date}
      tileClassName={tileClassName}
    />
  );
}

//export default Kalenteri2;
*/