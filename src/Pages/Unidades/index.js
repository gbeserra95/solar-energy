import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import Table from '../../components/Table'
import TableRow from '../../components/TableRow'
import Button from '../../components/Button'

import { ButtonContainer } from './styles'

function Unidades() {
  return (
    <Container>
      <Menu current="unidades"></Menu>
      <MainSection title="Unidades">
        <Table>
          <TableRow
            id="156"
            nickname="Painel 1"
            place="Rua 5"
            brand="Canadian"
            model="155W"
          />
          <TableRow
            id="1562"
            nickname="Painel 2"
            place="Rua 15"
            brand="Risen"
            model="100W"
          />
        </Table>
        <ButtonContainer>
          <Button bg="rgba(76, 93, 241, 1)">Nova unidade</Button>
        </ButtonContainer>
      </MainSection>
    </Container>
  )
}

export default Unidades
