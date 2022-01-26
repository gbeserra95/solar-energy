import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import Table from '../../components/Table'

function Unidades() {
  return (
    <Container>
      <Menu current="unidades"></Menu>
      <MainSection title="Unidades">
        <Table />
      </MainSection>
    </Container>
  )
}

export default Unidades
