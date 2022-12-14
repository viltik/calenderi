import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Kalenteri() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <Kalenteri
      onChange={onChange}
      value={value}
    />
  );
}
export default Kalenteri;