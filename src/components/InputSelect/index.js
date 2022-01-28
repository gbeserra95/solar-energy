import { InputContainer, Label, Select } from './styles'

function InputSelect({ label, size, options, description, ...otherProps }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select width={size ? size : '15rem'} {...otherProps}>
        <option disabled value="">
          {description}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </InputContainer>
  )
}

export default InputSelect
