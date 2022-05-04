
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePickers () {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className='DatePicker' >
      <DatePicker
      className='datePikar-box'
        onChange={date => setSelectedDate(date)}
        placeholderText={'dd/mm/yyyy'}
        filterDate={date => date.getDay() !== 7 && date.getDay() !== 0} 
        scrollableYearDropdown
      />
     </div>
  )
}

export default DatePickers;