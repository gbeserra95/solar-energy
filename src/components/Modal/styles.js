import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  visibility: ${props => props.visibility};
  background-color: rgba(37, 40, 43, 1);
  opacity: 90%;
`

export const DefaultContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  visibility: ${props => props.visibility};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const ModalContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  padding: 0.75rem;
  border-radius: 10px;
  margin: 0.75rem 0;
  table {
    margin: 0.75rem auto;
  }
  th {
    padding: 0 0.75rem;
    font-size: 0.75rem;
    text-align: left;
    font-weight: 700;
  }
  td {
    padding: 0 0.75rem;
    font-size: 0.75rem;
    text-align: left;
  }
`
export const SubTitle = styled.h3`
  color: rgba(37, 40, 43, 1);
  font-weight: 700;
  text-align: center;
  padding: 0.75rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 1rem;
`
