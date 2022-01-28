import styled from 'styled-components'

export const InputContainer = styled.div`
  height: 3rem;
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: left;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1rem;
`
export const InputText = styled.input`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  color: rgb(160, 152, 174);
  border: transparent;
  margin-left: 1.5rem;

  &:focus {
    border: none;
    outline: none;
  }
`
