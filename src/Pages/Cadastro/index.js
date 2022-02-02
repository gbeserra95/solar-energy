// Components
import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import FormUnidades from '../../components/FormUnidades'

function Cadastro() {
  // GET paramns from URL
  const id = new URLSearchParams(document.location.search.substring(1)).get(
    'id'
  )

  return (
    <Container>
      <Menu current="unidades" />
      <MainSection title="Unidades">
        {id ? <FormUnidades id={id} /> : <FormUnidades />}
      </MainSection>
    </Container>
  )
}

export default Cadastro
