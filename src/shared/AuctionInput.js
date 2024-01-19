import React from 'react'
import { Field, ErrorMessage } from 'formik'
import AuctionTextError from './AuctionTextError'

function AuctionInput(props) {
    const { label, name, ...rest } = props
// console.log("name:",typeof(name))
const inputStyles = {
      width: '100%',  
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box'
    }
    
  return (
    <div className='col-12 col-md-4'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} style={inputStyles} />
      <ErrorMessage component={AuctionTextError} name={name} />
    </div>
  )
}

export default AuctionInput