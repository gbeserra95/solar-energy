import { InputContainer, Label, Input } from './styles'

function InputText({ label, size, ...otherProps }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input width={size ? size : '15rem'} {...otherProps} />
    </InputContainer>
  )
}

export default InputText
