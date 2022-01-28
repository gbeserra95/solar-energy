import { useState } from 'react'

import CustomInput from '../../components/CustomInput'

import { InputContainer, Label } from './styles'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
registerLocale('pt', pt)

function InputDate({ label }) {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <InputContainer>
      <Label>{label}</Label>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        locale="pt"
        customInput={<CustomInput />}
      />
    </InputContainer>
  )
}

export default InputDate
