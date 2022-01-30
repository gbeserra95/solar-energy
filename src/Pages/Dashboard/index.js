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
import { getPastMonths } from '../../utils/dateFunctions'
import { getMonthlyConsumption } from '../../utils/consumptionFunction'

function Dashboard() {
  const [units, setUnits] = useState({})
  const [consumption, setConsumption] = useState([])
  const [active, setActive] = useState(0)
  const [inactive, setInactive] = useState(0)
  const [avgConsumption, setAvgConsumption] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Get data from json server
    async function handleData() {
      try {
        // Get data from /unidades
        let response = await fetch('http://localhost:3333/unidades')
        const myUnits = await response.json()
        setUnits(myUnits)
        // Get data from /geracoes
        response = await fetch('http://localhost:3333/geracoes')
        const myConsumption = await response.json()
        console.log(myConsumption)
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
        setError(error)
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
