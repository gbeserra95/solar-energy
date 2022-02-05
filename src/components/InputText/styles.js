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
  padding: 0.5rem;
  color: rgba(83, 87, 93, 1);
  font-size: 1rem;
  border-radius: 2px;
  outline: none;
  border: 1px solid rgba(83, 87, 93, 1);

  &:focus {
    border-color: black;
  }

  // Get rid of the arrows from standard number input
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`
