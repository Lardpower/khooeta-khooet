import {dataGenerator} from '../dataGenerator'
import {models} from '../models'
import {table} from '../components'
import {initCompanies} from './initCompanies'

export const generateCompanyTable = (wipeExistingData, inputCompanies) => {
  const tableContainer = document.getElementById('table-container')

  if (inputCompanies && typeof inputCompanies !== 'undefined') {
    dataGenerator(inputCompanies)
  }

  const companies = models.company.list()
  if (wipeExistingData) {
    const storage = window.localStorage
    storage.removeItem('Company')
    storage.removeItem('User')
    tableContainer.innerHTML = ''
  }
  tableContainer.appendChild(table(companies))
}
