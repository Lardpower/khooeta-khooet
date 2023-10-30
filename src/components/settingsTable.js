import {getLocalStorageSettings} from '../lib/settings/getLocalStorageSettings'
import {models} from '../models'
import $ from 'jquery'
import {storageSettingsKey} from '../lib/settings/localStorageSettingsKey'
import {toggleVisibility} from '../lib/settings/toggleVisibility'

export const settingsTable = ()  => {
  // create settings table (step 4)
  const storage = window.localStorage

  let settings = getLocalStorageSettings()

  // add settings table
  const fields = models.company.properties

  // set default values of each settings

  fields.forEach((f) => {
    // show the table col by default
    settings[f.id] = !!(typeof settings[f.id] === 'undefined' || settings[f.id])

    $('#settings-table > tbody').append(
        `<tr><td>${f.name}</td><td><input type="checkbox" `
        + `${settings[f.id] ? 'checked="checked"' : ''}`
        + ` name="settings-header" value="${f.id}"/></td></tr>`,
    )
  })

  // handle settings update
  $('[name="settings-header"]').on('change', (e) => {
    settings[$(e.target).attr('value')] = $(e.target).is(':checked')
    storage.setItem(storageSettingsKey, JSON.stringify(settings))

    toggleVisibility(fields)
  })

  toggleVisibility(fields)
}
