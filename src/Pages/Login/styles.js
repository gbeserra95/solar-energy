import styled from 'styled-components'
import myImage from '../../assets/images/login-image.png'

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${myImage});
  background-size: cover;
  background-repeat: no-repeat;
`
export const MainContainer = styled.main`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  width: 24rem;
  height: 36rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
