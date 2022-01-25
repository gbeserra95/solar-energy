import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
`
