import { CheckBoxContainer, CheckBox, Label } from './styles'

function InputCheckBox({ label, ...otherProps }) {
  return (
    <CheckBoxContainer>
      <CheckBox type="checkbox" {...otherProps} />
      <Label>{label}</Label>
    </CheckBoxContainer>
  )
}

export default InputCheckBox
