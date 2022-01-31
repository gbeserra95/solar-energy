// Navigate
import { useNavigate } from 'react-router-dom'

// Hooks
import { useState } from 'react'

// Toast to notify status
import { toast } from 'react-toastify'

// Components
import InputText from '../InputText'
import InputCheckBox from '../InputCheckBox'
import Button from '../Button'

// Styled-components
import { Container, SubTitle, Form, ButtonContainer } from './styles'

// Library to generate unique IDs
import { v4 as uuidv4 } from 'uuid'

// Utils
import { setData } from '../../utils/apiFunctions'

const SIZE = '30rem'

function FormUnidades() {
  const [nickname, setNickname] = useState('')
  const [place, setPlace] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [active, setActive] = useState('false')
  const history = useNavigate()

  // Post data into json-server
  async function handleSubmit(event) {
    event.preventDefault()
    console.log('here')
    try {
      await setData('/unidades', {
        idUnity: uuidv4(),
        nickname,
        place,
        brand,
        model,
        active
      })
      history('/unidades')
    } catch (error) {
      toast.error('Não foi possível buscar os dados!')
    }
  }
  return (
    <Container>
      <SubTitle>Cadastro de Unidade Geradora</SubTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          label="Apelido"
          value={nickname}
          onChange={event => setNickname(event.target.value)}
        />
        <InputText
          label="Local"
          size={SIZE}
          value={place}
          onChange={event => setPlace(event.target.value)}
        />
        <InputText
          label="Marca"
          size={SIZE}
          value={brand}
          onChange={event => setBrand(event.target.value)}
        />
        <InputText
          label="Modelo"
          size={SIZE}
          value={model}
          onChange={event => setModel(event.target.value)}
        />
        <InputCheckBox
          label="Ativo"
          size={SIZE}
          value={active}
          onChange={event => {
            if (active === 'false') {
              setActive('true')
            } else {
              setActive('false')
            }
          }}
        />
        <ButtonContainer>
          <Button bg="rgba(76, 93, 241, 1)" type="submit">
            Salvar
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}

export default FormUnidades
