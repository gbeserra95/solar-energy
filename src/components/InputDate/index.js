// Components
import CustomInput from '../../components/CustomInput'

// Styled-ComponentsComponents
import { InputContainer, Label } from './styles'

// React-datepicker package config
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
registerLocale('pt', pt)

function InputDate({ label, ...otherProps }) {
  return (
    <InputContainer>
      <style>
        {`.date-picker input {
          width: 100%
          }`}
      </style>
      <Label>{label}</Label>
      <DatePicker
        wrapperClassName="date-picker"
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
        locale="pt"
        customInput={<CustomInput />}
        {...otherProps}
      />
    </InputContainer>
  )
}

export default InputDate
