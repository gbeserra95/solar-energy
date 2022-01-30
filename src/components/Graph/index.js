// Chart libraries
import { Line } from 'react-chartjs-2'

// Styles-components
import { ChartContainer } from './styles'

const OPTIONS = {
  responsive: true,
  layout: {
    padding: {
      left: 48,
      right: 48
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Total de energia gerada por mês',
      align: 'start',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: {
        top: 0,
        bottom: 24
      },
      font: {
        size: 20
      }
    },
    legend: {
      display: false
    }
  },
  elements: {
    point: {
      radius: 0
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      position: 'right'
    }
  }
}

function Graph() {
  const labels = ['janeiro', 'dezembro']
  const myChart = {
    labels,
    datasets: [
      {
        data: [100, 200, 500, 700, 1200, 655, 450, 122, 60, 21, 35, 200],
        backgroundColor: 'rgba(33, 150, 243, 1)',
        tension: 0.2
      }
    ]
  }
  return (
    <ChartContainer>
      <Line datasetIdKey="id" options={OPTIONS} data={myChart} />
    </ChartContainer>
  )
}

export default Graph
