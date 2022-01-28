import InputText from '../InputText'
import InputCheckBox from '../InputCheckBox'

import { Container, SubTitle, Form } from './styles'

const SIZE = '30rem'

function FormUnidades() {
  return (
    <Container>
      <SubTitle>Cadastro de Unidade Geradora</SubTitle>
      <Form>
        <InputText label="Apelido" />
        <InputText label="Local" size={SIZE} />
        <InputText label="Marca" size={SIZE} />
        <InputText label="Modelo" size={SIZE} />
        <InputCheckBox label="Ativo" size={SIZE} />
      </Form>
    </Container>
  )
}

export default FormUnidades
