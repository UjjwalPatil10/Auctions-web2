import React from 'react';
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (date) => {
    helpers.setValue(date);
  };

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={field.value}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
      />
      {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
    </div>
  );
};

export default DatePickerField;