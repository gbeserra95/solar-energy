import Button from '../../components/Button'
import { Row, Action } from './styles'

function TableRow({ id, nickname, place, brand, model }) {
  return (
    <Row>
      <td>{id}</td>
      <td>{nickname}</td>
      <td>{place}</td>
      <td>{brand}</td>
      <td>{model}</td>
      <td>
        <Button bg={'rgba(141, 181, 27, 1)'}>Editar</Button>
      </td>
      <td className="action">
        <Button bg={'rgba(216, 45, 86, 1)'}>Remover</Button>
      </td>
    </Row>
  )
}

export default TableRow
