import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date(2021, 0));
  return (
    <DatePicker
      className='datePikar-box'
      autoComplete="off"
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
    />
  );
};
export default DatePickers;