import React from 'react'
//import { Input, Select, RadioButtons, ChakraInput } from '@chakra-ui/react'
import AuctionInput from './AuctionInput'
import AuctionChakraInput from './AuctionChakraInput'
import AuctionRadioButtons from './AuctionRadioButtons'
import AuctionSelect from './AuctionSelect'
import CheckboxGroup from './CheckboxGroup'
import TextArea from './TextArea'
import DatePickerField from './DatePickerField'
import TimePickerField from './TimePickerField'

function AuctionFormikControl(props) {
    const { control, ...rest } = props

    switch (control) {
      case 'input':
        return <AuctionInput {...rest} />

      case 'select':
        return <AuctionSelect {...rest} />

      case 'radio':
        return <AuctionRadioButtons {...rest} />
      
      

      case 'chakraInput':
        return <AuctionChakraInput {...rest} />
        
        case 'checkbox':
          return <CheckboxGroup {...rest} />
          
          case 'textarea':
          return <TextArea {...rest} />
          case 'datepicker':
            return <DatePickerField {...rest} />;

        case 'timepicker':
             return <TimePickerField {...rest} />
          
      default:
        return null
}
}

export default AuctionFormikControl;