import styled from 'styled-components'

export const CustomContainer = styled.div`
  position: relative;
  display: flex;
  width: 16rem;
  align-items: center;
  border-radius: 2px;
  outline: none;
  border: 1px solid rgba(83, 87, 93, 1);
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  color: rgba(83, 87, 93, 1);
  font-size: 1rem;
  border: none;
  background-color: transparent;
`

export const IconContainer = styled.div`
  margin: auto 0.25rem;
  position: absolute;
  right: 0;
  z-index: -1;
`
