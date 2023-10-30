import {dataGenerator} from '../dataGenerator'
import {models} from '../models'
import {table} from '../components'

export const generateCompanyTable = (wipeExistingData) => {
  const tableContainer = document.getElementById('table-container')
  dataGenerator()
  const companies = models.company.list()
  if (wipeExistingData) {
    const storage = window.localStorage
    storage.removeItem('Company')
    storage.removeItem('User')
    tableContainer.innerHTML = ''
  }
  tableContainer.appendChild(table(companies))
}
