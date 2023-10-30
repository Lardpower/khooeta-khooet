import {table} from './components'
import {models} from './models'
import {dataGenerator} from './dataGenerator'
import $ from 'jquery'
import {settingsTable} from './components/settingsTable'

dataGenerator()
const companies = models.company.list()

// main table
const tableContainer = document.getElementById('table-container')
tableContainer.appendChild(table(companies))

$(document).ready(function() {
  // place the settings table and all related event handlers
  settingsTable()

  $('#regenerate-companies').click(() => {
    if (!confirm('Do you really want to regenerate all the companies and users?')){
      return false;
    }

    const storage = window.localStorage;
    storage.removeItem('Company')
    storage.removeItem('User')

    dataGenerator()
    const companies = models.company.list()
    tableContainer.innerHTML = ""
    tableContainer.appendChild(table(companies))
  })
})
