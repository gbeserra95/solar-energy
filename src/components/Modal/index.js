// Components
import Button from '../Button'

// Utils
import { deleteData } from '../../utils/myAPI'

// Styled-components
import {
  DefaultContainer,
  ModalContainer,
  SubTitle,
  ButtonContainer,
  BackgroundContainer
} from './styles'
// Toast
import { toast } from 'react-toastify'

function Modal({ visibility, id, nickname, place, brand, model, callback }) {
  async function deleteRegister() {
    try {
      await deleteData(`/unidades/${id}`)
      callback('hidden')
    } catch (error) {
      toast.error('Não foi possível buscar os dados!')
      callback('hidden')
    }
  }

  return (
    <>
      <BackgroundContainer visibility={visibility} />
      <DefaultContainer visibility={visibility}>
        <ModalContainer>
          <SubTitle>Deseja remover esta unidade?</SubTitle>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Apelido</th>
                <th>Local</th>
                <th>Marca</th>
                <th>Modelo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{nickname}</td>
                <td>{place}</td>
                <td>{brand}</td>
                <td>{model}</td>
              </tr>
            </tbody>
          </table>
          <ButtonContainer>
            <Button
              bg="#e8e8e8"
              color="rgba(37, 40, 43, 1)"
              type="button"
              onClick={() => callback('hidden')}
            >
              Não
            </Button>
            <Button
              bg="rgba(216, 45, 86, 1)"
              color="white"
              type="button"
              onClick={() => deleteRegister()}
            >
              Sim
            </Button>
          </ButtonContainer>
        </ModalContainer>
      </DefaultContainer>
    </>
  )
}

export default Modal
