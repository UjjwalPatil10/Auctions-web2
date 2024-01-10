import React from 'react'
import { Field, ErrorMessage } from 'formik'
import AuctionTextError from './AuctionTextError'

function AuctionRadioButtons(props) {
    const { label, name, options, ...rest } = props

    const radioContainerStyles = {
      display: 'flex',        // Use flexbox
      flexDirection: 'row',   // Arrange items in a row
      alignItems: 'center',   // Center items vertically
      marginBottom: '10px'    // Add a small gap below the row
    };

    const radioStyles = {
     // marginRight: '10px' ,
     marginLeft: '10px',
      verticalAlign: 'middle'    // Add space between radio options
    };

  return (
    <div className='col-14 col-md-4'>
    <label>{label}</label>
    <div style={radioContainerStyles}>
    <Field name={name} >
      {({ field }) => {
        return options.map(option => {
          return (
            <React.Fragment key={option.key} >
              <input
                type='radio'
                id={option.value}
                {...field}
                {...rest}
                value={option.value}
                checked={field.value === option.value}
                style={radioStyles} 
              />
              <label htmlFor={option.value} style={{ marginLeft: '5px' }}>{option.key}</label>
            </React.Fragment>
          )
        })
      }}
    </Field>
    </div>
    <ErrorMessage component={AuctionTextError} name={name} />
  </div>
  )
}

export default AuctionRadioButtons