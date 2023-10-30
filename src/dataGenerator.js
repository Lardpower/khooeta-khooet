import {models} from './models'
import {companyIndustries} from './lib/companyIndustries'
import {getRandomInt} from './lib/getRandomInt'

/**
 * Generate random int between min and max (both inclusive)
 *
 * @param max
 * @param min
 * @return number
 */


const initCompanies = [
  { id: 1, name: 'Amazon', h: 4 },
  { id: 2, name: 'Google', h: 5 },
  { id: 3, name: 'Spotify', h: 10 },
  { id: 4, name: 'Klarna', h: 3 },
  { id: 5, name: 'Uber', h: 5 },
  { id: 6, name: 'Microsoft', h: 7 },
  { id: 6, name: 'Netflix', h: 3 },
]

export function dataGenerator() {
  _.each(initCompanies, c => {
    let companyAttrs = { ...c }

    // set company's value for ~80% of all generated companies
    if (Math.random() <= 0.8) {
      companyAttrs.value = getRandomInt(100, 1000)
    }

    // set company's user count for ~80% of all generated companies
    if (Math.random() <= 0.8) {
      companyAttrs.userCount = getRandomInt(1, 15)
    }

    // set company's user count for ~80% of all generated companies
    if (Math.random() <= 0.8) {
      // get random industry
      companyAttrs.industry = companyIndustries[Math.floor(
          Math.random() * companyIndustries.length,
      )]
    }

    models.company.create(companyAttrs)
  })
}
