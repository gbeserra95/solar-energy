import { TextContainer } from './styles'

function Text({ weight, size, color, children }) {
  return (
    <TextContainer weight={weight} size={size} color={color}>
      {children}
    </TextContainer>
  )
}

export default Text
