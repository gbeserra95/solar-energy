// Navigate
import { useNavigate } from 'react-router-dom'

// Hooks
import { useState, useEffect } from 'react'

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
import { getData, setData, updateData } from '../../utils/myAPI'

const SIZE = '30rem'

function FormUnidades({ ...props }) {
  const [idUnit, setIdUnit] = useState('')
  const [nickname, setNickname] = useState('')
  const [place, setPlace] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [active, setActive] = useState('false')

  const history = useNavigate()

  // Post data into json-server
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await setData('/unidades', {
        idUnit: uuidv4(),
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

  // Put method to edit data into json-server
  async function handleEdit(event) {
    event.preventDefault()
    try {
      await updateData(`/unidades/${props.id}`, {
        idUnit: idUnit,
        nickname: nickname,
        place: place,
        brand: brand,
        model: model,
        active: active
      })
      history('/unidades')
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível buscar os dados')
    }
  }
  // Load the data when an Id is passed as a parameter
  useEffect(() => {
    async function handleParam() {
      try {
        const response = await getData(`unidades?id=${props.id}`)
        setIdUnit(response[0].idUnit)
        setNickname(response[0].nickname)
        setPlace(response[0].place)
        setBrand(response[0].brand)
        setModel(response[0].model)
        setActive(response[0].active)
      } catch (error) {
        toast.error('Não foi possível buscar os dados')
      }
    }
    if (props.id) {
      handleParam()
    }
  }, [props.id])

  return (
    <Container>
      {props.id ? (
        <SubTitle>Editar Unidade Geradora</SubTitle>
      ) : (
        <SubTitle>Cadastro de Unidade Geradora</SubTitle>
      )}
      <Form onSubmit={props.id ? handleEdit : handleSubmit}>
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
          onChange={() => {
            if (active === 'false') {
              setActive('true')
            } else {
              setActive('false')
            }
          }}
          checked={active === 'true' ? true : false}
        />
        <ButtonContainer>
          {props.id ? (
            <Button bg="rgba(76, 93, 241, 1)" type="submit">
              Atualizar
            </Button>
          ) : (
            <Button bg="rgba(76, 93, 241, 1)" type="submit">
              Salvar
            </Button>
          )}
        </ButtonContainer>
      </Form>
    </Container>
  )
}

export default FormUnidades
