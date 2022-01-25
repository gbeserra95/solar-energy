import { TextContainer } from './styles'

function Text({ weight, size, children }) {
  return (
    <TextContainer weight={weight} size={size}>
      {children}
    </TextContainer>
  )
}

export default Text
