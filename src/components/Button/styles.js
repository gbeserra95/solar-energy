import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.bg};
  color: white;
  width: 100%;
  font-weight: 700;
  cursor: pointer;
`
