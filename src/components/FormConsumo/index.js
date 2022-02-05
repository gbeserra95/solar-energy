// Hooks
import { useState, useEffect } from 'react'

// Components
import InputSelect from '../InputSelect'
import InputDate from '../InputDate'
import InputText from '../InputText'
import Button from '../../components/Button'

// Styled-components
import { Container, SubTitle, Form, ButtonContainer } from './styles'

// Utils
import { getData, setData } from '../../utils/myAPI'
import { formateDate } from '../../utils/myDate'

// Toast
import { toast } from 'react-toastify'

function FormConsumo() {
  const [options, setOptions] = useState([])
  const [unit, setUnit] = useState('')
  const [date, setDate] = useState(new Date())
  const [consumption, setConsumption] = useState(null)

  useEffect(() => {
    async function handleOptions() {
      try {
        const response = await getData(`/unidades`)
        setOptions(
          response.map(item => {
            return {
              label: `Unidade ${item.id} - ${item.nickname}`,
              value: item.id
            }
          })
        )
      } catch (error) {
        toast.error('Não foi possível buscar os dados!')
      }
    }
    handleOptions()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await setData('/geracoes', {
        idUnit: parseInt(unit),
        date: formateDate(date),
        consumption: parseInt(consumption)
      })
    } catch (error) {
      toast.error('Não foi possível buscar os dados!')
    }
  }

  return (
    <Container>
      <SubTitle>Cadastro de Unidade Geradora</SubTitle>
      <Form onSubmit={handleSubmit}>
        <InputSelect
          label="Unidade geradora:"
          size="16rem"
          options={options}
          description="Selecione a unidade"
          onChange={event => setUnit(event.target.value)}
        />
        <InputDate
          label="Mês/Ano"
          selected={date}
          onChange={date => setDate(date)}
        />
        <InputText
          label="Total kW gerado:"
          type="number"
          onChange={event => setConsumption(event.target.value)}
        />
        <ButtonContainer>
          <Button
            bg="rgba(76, 93, 241, 1)"
            type="submit"
            disabled={!consumption}
          >
            Salvar
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}

export default FormConsumo
