import React from 'react';
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

const DatePickerField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (date) => {
    // Format the date using dayjs to "YYYY-MM-DD"
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    helpers.setValue(formattedDate);
  };
  // console.log("date:" ,typeof(field.value))

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={field.value ? new Date(field.value) : null}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
      />
      {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
    </div>
  );
};

export default DatePickerField;

// ===================================================================================
// import React from "react";
// import { useField } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DatePickerField = ({ label, ...props }) => {
//   const [field, meta, helpers] = useField(props);
//   const handleDateChange = (date) => {
//     helpers.setValue(date);
//     console.log("dates",date);
//   };

//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <DatePicker
//         {...field}
//         {...props}
//         selected={field.value}
//         onChange={handleDateChange}
//         showTimeSelect
//         dateFormat="yyyy-MM-dd hh:mm aa"
//         timeFormat="hh:mm aa"
//         timeCaption="Time"
//         timeZone="Asia/Kolkata"
//       />
//       {meta.touched && meta.error && (
//         <div style={{ color: "red" }}>{meta.error}</div>
//       )}
//     </div>
//   );
// };

// export default DatePickerField;
