import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import Chart from '../../components/Chart'
import Card from '../../components/Card'

import { CardsContainer } from './styles'

function Dashboard() {
  return (
    <Container>
      <Menu current="dashboard"></Menu>
      <MainSection title="Dashboard">
        <CardsContainer>
          <Card title="Total unidades" value="60" />
          <Card title="Unidades ativas" value="16" />
          <Card title="Unidades inativas" value="43" />
          <Card title="Média de energia" value="64 kW" />
        </CardsContainer>
        <Chart />
      </MainSection>
    </Container>
  )
}

export default Dashboard
