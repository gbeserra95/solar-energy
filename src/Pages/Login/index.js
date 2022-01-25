import Container from '../../components/Container'
import Text from '../../components/Text'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Button from '../../components/Button'

import {
  ImageContainer,
  MainContainer,
  LoginContainer,
  LogoContainer,
  Form
} from './styles'

function Login() {
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
          <Form>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <Button bg="rgba(76, 188, 154, 1)">Entrar</Button>
          </Form>
        </LoginContainer>
      </MainContainer>
    </Container>
  )
}

export default Login
