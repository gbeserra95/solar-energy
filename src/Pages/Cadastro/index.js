// Components
import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import FormUnidades from '../../components/FormUnidades'

function Cadastro() {
  return (
    <Container>
      <Menu current="unidades" />
      <MainSection title="Unidades">
        <FormUnidades />
      </MainSection>
    </Container>
  )
}

export default Cadastro
