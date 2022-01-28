import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 1rem;
`

export const Label = styled.label`
  font-weight: 700;
  color: rgba(83, 87, 93, 1);
`
export const Input = styled.input`
  width: ${props => props.width};
  height: 1rem;
  padding: 0.5rem;
  color: rgba(83, 87, 93, 1);
  font-size: 1rem;
  border-radius: 2px;
  outline: none;
  border: 1px solid rgba(83, 87, 93, 1);

  &:focus {
    border-color: black;
  }
`
