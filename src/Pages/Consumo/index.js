import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import FormConsumo from '../../components/FormConsumo'

function Consumo() {
  return (
    <Container>
      <Menu current="consumo" />
      <MainSection title="Lançamento de geração mensal">
        <FormConsumo />
      </MainSection>
    </Container>
  )
}

export default Consumo
