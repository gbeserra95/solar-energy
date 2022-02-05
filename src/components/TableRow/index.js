// Navigation
import { useNavigate } from 'react-router-dom'

// Components
import Button from '../../components/Button'

// Styled-components
import { Row } from './styles'

function TableRow({ id, nickname, place, brand, model, callback }) {
  const history = useNavigate()
  const modalData = {
    visibility: 'visible',
    id: id,
    nickname: nickname,
    place: place,
    brand: brand,
    model: model
  }

  return (
    <>
      <Row>
        <td>{id}</td>
        <td>{nickname}</td>
        <td>{place}</td>
        <td>{brand}</td>
        <td>{model}</td>
        <td>
          <Button
            bg={'rgba(141, 181, 27, 1)'}
            onClick={() => {
              history(`/cadastro?id=${id}`)
            }}
          >
            Editar
          </Button>
        </td>
        <td className="action">
          <Button bg="rgba(216, 45, 86, 1)" onClick={() => callback(modalData)}>
            Remover
          </Button>
        </td>
      </Row>
    </>
  )
}

export default TableRow
