// Hooks
import { useState, useEffect } from 'react'

// Components
import Container from '../../components/Container'
import Menu from '../../components/Menu'
import MainSection from '../../components/MainSection'
import Graph from '../../components/Graph'
import Card from '../../components/Card'

// Styled Components
import { CardsContainer } from './styles'

// Utils
import { getPastMonths } from '../../utils/myDate'
import { getMonthlyConsumption } from '../../utils/myConsumption'
import { getData } from '../../utils/myAPI'
import { toast } from 'react-toastify'

function Dashboard() {
  const [units, setUnits] = useState({})
  const [consumption, setConsumption] = useState([])
  const [active, setActive] = useState(0)
  const [inactive, setInactive] = useState(0)
  const [avgConsumption, setAvgConsumption] = useState(0)

  useEffect(() => {
    // Get data from json server
    async function handleData() {
      try {
        // Get data from /unidades
        const myUnits = await getData('/unidades')
        setUnits(myUnits)
        // Get data from /geracoes
        const myConsumption = await getData('/geracoes')
        setConsumption(myConsumption)
        // Set active, inactive and average consumption
        setActive(myUnits.filter(item => item.active === 'true').length)
        setInactive(myUnits.filter(item => item.active === 'false').length)
        setAvgConsumption(
          Math.round(
            myConsumption
              .map(item => item.consumption)
              .reduce((total, num) => total + num) / myUnits.length
          )
        )
        //setAvgConsumption(average)
      } catch (error) {
        toast.warning('Não há dados de consumos cadastrados!')
      }
    }
    handleData()
  }, [])

  return (
    <Container>
      <Menu current="dashboard"></Menu>
      <MainSection title="Dashboard">
        <CardsContainer>
          <Card title="Total unidades" value={units.length} />
          <Card title="Unidades ativas" value={active} />
          <Card title="Unidades inativas" value={inactive} />
          <Card title="Média de energia" value={`${avgConsumption} kW`} />
        </CardsContainer>
        <Graph
          labels={getPastMonths()}
          data={getMonthlyConsumption(getPastMonths(), consumption)}
        />
      </MainSection>
    </Container>
  )
}

export default Dashboard
