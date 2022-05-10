import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const DatePickers = () => {
	const [startDate, setStartDate] = useState(null);
	// console.log("startDate", startDate.getDay());
	return (
		<DatePicker
			className='datePikar-box'
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			maxDate={addDays(new Date(), -3)}
			placeholderText="Select a date in 1to 7 days in the future"
		/>
	);
};
export default DatePickers;