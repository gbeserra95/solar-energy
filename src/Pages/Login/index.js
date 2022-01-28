import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Container from '../../components/Container'
import Text from '../../components/Text'
import Logo from '../../components/Logo'
import InputLogin from '../../components/InputLogin'
import Button from '../../components/Button'

import {
  ImageContainer,
  MainContainer,
  LoginContainer,
  LogoContainer,
  Form
} from './styles'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useNavigate()

  function handleLogin(event) {
    event.preventDefault()
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!re.test(email)) {
      setError('* E-mail ou senha inválidos!')
      return 1
    }

    if (password.length < 6) {
      setError('* E-mail ou senha inválidos!')
      return 1
    }

    history('/dashboard')
  }

  return (
    <Container>
      <ImageContainer />
      <MainContainer>
        <LoginContainer>
          <LogoContainer>
            <Logo size="16rem" />
            <Text weight="normal" size="1rem">
              Seja bem-vindo!
            </Text>
          </LogoContainer>
          <Form onSubmit={handleLogin}>
            <InputLogin
              type="email"
              placeholder="E-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <InputLogin
              type="password"
              placeholder="Senha"
              onChange={event => setPassword(event.target.value)}
            />
            <Button bg="rgba(76, 188, 154, 1)" type="submit">
              Entrar
            </Button>
          </Form>
          <Text weight={500} size={'0.75rem'} color="red">
            {error}
          </Text>
        </LoginContainer>
      </MainContainer>
    </Container>
  )
}

export default Login
