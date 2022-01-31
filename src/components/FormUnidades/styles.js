import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
`
export const SubTitle = styled.h2`
  display: flex;
  justify-content: left;
  width: 100%;
  height: 4rem;
  text-align: left;
  margin: 2.5rem 0 0 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(55, 69, 87, 1);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 1rem;
  width: 100%;
  padding: 0.75rem;
  margin: 0.75rem 0;
  a {
    text-decoration: none;
  }
`

export const ButtonContainer = styled.div`
  display: block;
  float: left;
  width: 15rem;
  margin: 0.75rem 0;
`
