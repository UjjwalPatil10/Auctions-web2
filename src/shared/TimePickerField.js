import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function TimePickerField({ name, label }) {
  const [value, setValue] = useState(dayjs());

 

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className='bg-info time'>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <TimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
      </div>
    </div>
  );
}

export default TimePickerField;