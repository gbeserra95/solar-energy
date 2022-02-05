// Return labels from 12 months before today => 01/2022, 12/2021, 11/2021...
export const getPastMonths = () => {
  let date = new Date()
  let thisMonth = date.getMonth() + 1
  let thisYear = date.getFullYear()

  let pastMonths = []

  for (let i = 0; i < 12; i++) {
    if (thisMonth > 9) {
      pastMonths.push(`${thisMonth}/${thisYear}`)
    } else {
      pastMonths.push(`0${thisMonth}/${thisYear}`)
    }
    thisMonth--
    if (thisMonth === 0) {
      thisMonth = 12
      thisYear--
    }
  }

  return pastMonths.reverse()
}

// Returns date in the MM/YYYY format
export const formateDate = date => {
  let thisMonth = date.getMonth() + 1
  let thisYear = date.getFullYear()

  if (thisMonth < 10) {
    return `0${thisMonth}/${thisYear}`
  }

  return `${thisMonth}/${thisYear}`
}
