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
  console.log("date:" ,typeof(field.value))

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
// import DateView from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ErrorMessage, Field } from "formik";
// import TextError from "./AuctionTextError";

// const DatePickerField = (props) => {
//   const { label, name, ...rest } = props;

//   return (
//     <div className="">
//       <label htmlFor={name}>{label}</label>
//       <Field name={name}>
//         {({ field, form }) => {
//           const { setFieldValue, value } = field;
//           return (
//             <DateView
//               id={name}
//               {...rest}
//               selected={value}
//               onChange={(val) => {
//                 setFieldValue(name, val); // Ensure setFieldValue is called with the correct arguments
//                 form.setFieldValue(name, val); // Additionally, try using form.setFieldValue
//               }}
//             />
//           );
//         }}
//       </Field>
//       <ErrorMessage name={name} component={TextError} />
//     </div>
//   );
// };

// export default DatePickerField;
