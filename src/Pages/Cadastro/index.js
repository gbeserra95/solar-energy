import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import FormUnidades from '../../components/FormUnidades'
import Button from '../../components/Button'

import { ButtonContainer } from './styles'

function Cadastro() {
  return (
    <Container>
      <Menu current="unidades" />
      <MainSection title="Unidades">
        <FormUnidades />
        <ButtonContainer>
          <Button bg="rgba(76, 93, 241, 1)">Salvar</Button>
        </ButtonContainer>
      </MainSection>
    </Container>
  )
}

export default Cadastro
