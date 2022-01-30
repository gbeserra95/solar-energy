export const getMonthlyConsumption = (labels, data) => {
  let monthlyArrays = []
  let monthlyConsumption = []

  for (let label of labels) {
    monthlyArrays.push(data.filter(item => item.date === label))
  }

  for (let array of monthlyArrays) {
    if (array.length !== 0) {
      monthlyConsumption.push(
        array.map(item => item.consumption).reduce((total, num) => total + num)
      )
    } else {
      monthlyConsumption.push(0)
    }
  }

  return monthlyConsumption
}

/*
  const labels = [
    '01/2022',
    '12/2021',
    '11/2021',
    '10/2021',
    '09/2021',
    '08/2021',
    '07/2021',
    '06/2021',
    '05/2021',
    '04/2021',
    '03/2021',
    '02/2021'
  ]
  const data = [
    { id: '156', date: '02/2021', consumption: 500 },
    { id: '157', date: '03/2021', consumption: 800 },
    { id: '1562', date: '02/2021', consumption: 700 }
  ]
*/
