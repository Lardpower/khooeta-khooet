import {getRandomInt} from '../getRandomInt'
import {dataGenerator} from '../../dataGenerator'
import {models} from '../../models'
import {table} from '../../components'
import {generateCompanyTable} from '../generateCompanyTable'

export const runSimulation = () => {
  const timerId = setInterval(() => {

    // generate 5-10 new companies every tick
    const newCompaniesNum = getRandomInt(5, 10)

    dataGenerator(
        Array.from({ length: newCompaniesNum }, () => ({})),
    )

    generateCompanyTable(false)

    const tableContainer = document.getElementById('table-container')

    const companies = models.company.list()
    tableContainer.innerHTML = ''
    tableContainer.appendChild(table(companies))


  }, 1000)

  return timerId
}
