import React from 'react'
import { Field, ErrorMessage } from 'formik'
import AuctionTextError from './AuctionTextError'


function AuctionSelect(props) {
    const { label, name, options, ...rest } = props

    const selectStyles = {
      width: '100%',  // You can adjust the width as per your requirements
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box'
    }

  return (
    <div className='col-12 col-md-4'>
      <label htmlFor={name}>{label} </label>
      
      <Field as='select' id={name} name={name} style={selectStyles} {...rest}>
        {options.map(option => {
          
          return (
            <option key={option.value} value={option.value}>
              {option.key}
              
            </option>
            
          )
        })}
        
      </Field>
      
      <ErrorMessage component={AuctionTextError} name={name} />
    </div>
  )
}

export default AuctionSelect