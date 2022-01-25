import { ButtonContainer } from './styles'

function Button({ bg, children, ...otherProps }) {
  return (
    <ButtonContainer bg={bg} {...otherProps}>
      {children}
    </ButtonContainer>
  )
}

export default Button
