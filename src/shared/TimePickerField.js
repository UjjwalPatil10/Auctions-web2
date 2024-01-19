import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function TimePickerField({ name, label }) {
  
  // Format the dayjs object to "HH:mm:ss" format
  const [value, setValue] = useState(dayjs());
  const formattedTime = value.format('hh:mm A').toString();

  console.log("time:", formattedTime);
  console.log("time:", typeof formattedTime);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className='time bg-info'>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <TimePicker
            value={formattedTime}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default TimePickerField;


// ------------------------------------------------------------

// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// function TimePickerField({ name, label, onTimeChange }) {
//   const [value, setValue] = useState(dayjs());
//   const formattedTime = value.format('hh:mm A');

//   // Invoke the callback with the formatted time value when it changes
//   const handleTimeChange = (newValue) => {
//     setValue(newValue);
//     onTimeChange(newValue.format('hh:mm A'));
//   };

//   return (
//     <div>
//       <label htmlFor={name}>{label}</label>
//       <div className='time'>
//         <LocalizationProvider dateAdapter={AdapterDayjs} >
//           <TimePicker
//             value={value}
//             onChange={handleTimeChange}
//           />
//         </LocalizationProvider>
//       </div>
//     </div>
//   );
// }

// export default TimePickerField;
