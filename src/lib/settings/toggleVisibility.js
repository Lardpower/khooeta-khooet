import $ from 'jquery'
import {getLocalStorageSettings} from './getLocalStorageSettings'

export const toggleVisibility = (fields) => {
  let settings = getLocalStorageSettings()

  // show/hide cols based on the settings
  fields.forEach((f) => {
    $('#table-container table thead td#header-' + f.id).
        css('display', settings[f.id] ? 'inherit' : 'none')

    $('#table-container table tbody td[field="' + f.id + '"]').
        css('display', settings[f.id] ? 'inherit' : 'none')
  })
}
