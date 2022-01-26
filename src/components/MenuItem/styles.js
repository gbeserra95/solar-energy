import styled from 'styled-components'

export const ItemContainer = styled.li`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 0.5rem;
  cursor: pointer;
`
