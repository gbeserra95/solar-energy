// Chart libraries
import { Chart, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'

// Styles-components
import { ChartContainer } from './styles'

Chart.register(...registerables)

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
      position: 'right',
      min: 0,
      suggestedMax: 100
    }
  }
}

function Graph({ labels, data }) {
  const myChart = {
    labels: labels,
    datasets: [
      {
        data: data,
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 2,
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
