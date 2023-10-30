import {models} from './models'
import {companyIndustries} from './lib/companyIndustries'
import {getRandomInt} from './lib/getRandomInt'


export function dataGenerator(companies) {
  _.each(companies, c => {
    let companyAttrs = { ...c }

    // set random company ID
    if (typeof c.id === 'undefined'){
      companyAttrs.id = new Date().getUTCMilliseconds() + getRandomInt(1, 100000)
    }

    // set random name of the company
    if (typeof c.name === 'undefined') {
      companyAttrs.name = 'Company ' + companyAttrs.id
    }

    // set random health of the company
    if (typeof c.h === 'undefined') {
      companyAttrs.h = getRandomInt(1, 10)
    }

    // set company's value for ~80% of all generated companies
    if (Math.random() <= 0.8) {
      companyAttrs.value = getRandomInt(100, 1000)
    }

    // set company's user count for ~80% of all generated companies
    if (Math.random() <= 0.8) {
      // get random industry
      companyAttrs.industry = companyIndustries[Math.floor(
          Math.random() * companyIndustries.length,
      )]
    }

    // set the number of users that will be created
    companyAttrs.userCount = getRandomInt(1, 15)

    models.company.create(companyAttrs)

    const companyUsers = []
    // attach 1-15 users to the company
    Array.from({ length: companyAttrs.userCount }).forEach(() => {
      companyUsers.push({
        id: new Date().getUTCMilliseconds() + getRandomInt(1, 100000),
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
