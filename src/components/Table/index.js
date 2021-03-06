import { Container, SubTitle, TableContainer, THeader, TBody } from './styles'

function Table({ children }) {
  return (
    <Container>
      <SubTitle>Lista de unidades</SubTitle>
      <TableContainer>
        <THeader>
          <tr>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th></th>
            <th></th>
          </tr>
        </THeader>
        <TBody>{children}</TBody>
      </TableContainer>
    </Container>
  )
}

export default Table
