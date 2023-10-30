import $ from 'jquery'
import {settingsTable} from './components/settingsTable'
import {regenerateButton} from './components/regenerateButton'
import {generateCompanyTable} from './lib/generateCompanyTable'
import {runSimulation} from './lib/simulation/runSimulation'
import {initCompanies} from './lib/initCompanies'

generateCompanyTable(false, initCompanies)

$(document).ready(function() {
  // place the settings table and all related event handlers
  settingsTable()

  regenerateButton()
})

runSimulation()
