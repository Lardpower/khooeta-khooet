import $ from 'jquery'
import {generateCompanyTable} from '../lib/generateCompanyTable'
import {initCompanies} from '../lib/initCompanies'

export const regenerateButton = () => {
  $('#regenerate-companies').click(() => {
    if (
        !confirm(
            'Do you really want to regenerate all the companies and users?')
    ) {
      return false
    }

    generateCompanyTable(true, initCompanies)
  })
}
