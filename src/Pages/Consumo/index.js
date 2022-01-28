import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import FormConsumo from '../../components/FormConsumo'
import Button from '../../components/Button'

import { ButtonContainer } from './styles'

function Consumo() {
  return (
    <Container>
      <Menu current="consumo" />
      <MainSection title="Lançamento de geração mensal">
        <FormConsumo />
        <ButtonContainer>
          <Button bg="rgba(76, 93, 241, 1)">Salvar</Button>
        </ButtonContainer>
      </MainSection>
    </Container>
  )
}

export default Consumo
