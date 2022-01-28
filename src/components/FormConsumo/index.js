import InputSelect from '../InputSelect'
import InputDate from '../InputDate'
import InputText from '../InputText'

import { Container, SubTitle, Form } from './styles'

const OPTIONS = [
  {
    label: 'Unidade 1',
    value: 'unidade-1'
  },
  {
    label: 'Unidade 2',
    value: 'unidade-2'
  },
  {
    label: 'Unidade 3',
    value: 'unidade-3'
  }
]

function FormConsumo() {
  return (
    <Container>
      <SubTitle>Cadastro de Unidade Geradora</SubTitle>
      <Form>
        <InputSelect
          label="Unidade geradora:"
          size="16rem"
          options={OPTIONS}
          description="Selecione a unidade"
        />
        <InputDate label="Mês/Ano" />
        <InputText label="Total kW gerado:" />
      </Form>
    </Container>
  )
}

export default FormConsumo
