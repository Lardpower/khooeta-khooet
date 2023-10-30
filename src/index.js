import $ from 'jquery'
import {settingsTable} from './components/settingsTable'
import {regenerateButton} from './components/regenerateButton'
import {generateCompanyTable} from './lib/generateCompanyTable'
import {runSimulation} from './lib/simulation/runSimulation'

generateCompanyTable(false)

$(document).ready(function() {
  // place the settings table and all related event handlers
  settingsTable()

  regenerateButton()
})

runSimulation()
