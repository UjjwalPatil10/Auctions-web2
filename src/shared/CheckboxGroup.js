// import React from 'react'
// import { Field, ErrorMessage } from 'formik'
// import AuctionTextError from './AuctionTextError'

// function CheckboxGroup(props) {
//     const { label, name, options, ...rest } = props
//   return (
//     <div className=''>
//     <label>{label}</label>
//     <Field name={name} >
//       {({ field }) => {
//         return Array.isArray(options)&&options.map(option => {
//           return (
//             <React.Fragment key={option.key}>
//               <input
//                 type='checkbox'
//                 id={option.value}
//                 {...field}
//                 value={option.value}
//                 checked={field.value.includes(option.value)}
//               />
//               <label htmlFor={option.value}>{option.key}</label>
//             </React.Fragment>
//           )
//         })
//       }}
//     </Field>
//     <ErrorMessage component={AuctionTextError} name={name} />
//   </div>
//   )
// }

// export default CheckboxGroup


// ===================================================================================



import React from 'react';
import { Field, ErrorMessage } from 'formik';
import AuctionTextError from './AuctionTextError';

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div className='d-flex slope'>
      
      <label>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          return Array.isArray(options) && options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  onChange={() => {
                    const checkboxValues = [...field.value];
                    if (field.value.includes(option.value)) {
                      checkboxValues.splice(
                        checkboxValues.indexOf(option.value),
                        1
                      );
                    } else {
                      checkboxValues.push(option.value);
                    }
                    form.setFieldValue(name, checkboxValues);
                  }}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={AuctionTextError} name={name} />
    </div>
  );
}

export default CheckboxGroup;
