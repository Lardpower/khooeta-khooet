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
})
