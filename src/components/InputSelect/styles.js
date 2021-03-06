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
export const Select = styled.select`
  width: ${props => props.width};
  padding: 0.5rem;
  color: rgba(83, 87, 93, 1);
  font-size: 1rem;
  border-radius: 2px;
  outline: none;
  border: 1px solid rgba(83, 87, 93, 1);

  option {
    background-color: rgba(83, 87, 93, 1);
    color: #fbf4f4;
  }

  &:focus {
    border-color: black;
  }
`
