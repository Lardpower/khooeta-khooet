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

    const companyUsers = [];
    // attach 1-15 users to the company
    Array.from({ length: getRandomInt(1, 15) }).forEach(() => {
      companyUsers.push({
        id: new Date().getUTCMilliseconds() + getRandomInt(1, 1000),
        companyId: companyAttrs.id,
        createdDate: new Date(),
        lastActive: new Date(),
      })

      models.user.create(companyUsers[companyUsers.length - 1])
    })

    console.group(companyAttrs.name)
    console.info('Company', companyAttrs)
    console.info('Users', companyUsers)
    console.groupEnd()
  })
}
