import { CardContainer, Title, Value } from './styles'

function Card({ title, value }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </CardContainer>
  )
}

export default Card
