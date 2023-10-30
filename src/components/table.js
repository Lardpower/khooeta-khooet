const { company } = require('../models/company')

module.exports = (data) => {
  const tbl = document.createElement('table')
  const tblBody = document.createElement('tbody')
  const tblHead = document.createElement('thead')
  const th = document.createElement('tr')
  tbl.classList.add('pure-table')

  // get all possible properties even if some companies don't have all of them
  const fields = company.properties;

  _.each(fields, field => {
    const cell = document.createElement('td')
    const cellText = document.createTextNode(field.name)
    cell.appendChild(cellText)
    th.appendChild(cell)
  })

  _.each(data, item => {
    const row = document.createElement('tr')
    _.each(fields, field => {
      const cell = document.createElement('td')

      // show dash if property is missing
      const cellText = document.createTextNode(
          typeof item[field.id] !== 'undefined' ? item[field.id] : '-'
      )

      cell.appendChild(cellText)
      row.appendChild(cell)
    })
    tblBody.appendChild(row)
  })

  tblHead.appendChild(th)
  tbl.appendChild(tblHead)
  tbl.appendChild(tblBody)
  return tbl
}
