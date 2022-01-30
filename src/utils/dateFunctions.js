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
