import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid rgba(223, 224, 235, 1);
  border-radius: 4px;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 12.125rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(159, 162, 180, 1);
`
export const Value = styled.div`
  display: flex;
  justify-content: center;
  width: 12.125rem;
  font-size: 2rem;
  font-weight: 700;
  color: rgba(37, 39, 51, 1);
`
