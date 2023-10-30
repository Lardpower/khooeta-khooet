import {getRandomInt} from '../getRandomInt'
import {dataGenerator} from '../../dataGenerator'
import {models} from '../../models'
import {table} from '../../components'
import {generateCompanyTable} from '../generateCompanyTable'

const rebuildCompanyTable = () => {
  generateCompanyTable(false)

  const tableContainer = document.getElementById('table-container')

  const companies = models.company.list()
  tableContainer.innerHTML = ''
  tableContainer.appendChild(table(companies))
}

export const runSimulation = () => {
  const timerId = setInterval(() => {

    // generate 5-10 new companies every tick
    const newCompaniesNum = getRandomInt(5, 10)

    dataGenerator(
        Array.from({ length: newCompaniesNum }, () => ({})),
    )

    // exclude some "lost" customers with health score <= 5 (step 3)
    models.company.list().forEach((c) => {
      // chance of losing this customer
      if (Math.random() <= (c.h <= 5 ? 0.3 : 0.05)){
        // consider this client as lost
        models.company.delete(c.id)
      }

      // mark some clients as active (step 6)
      models.user.list().filter((u) => u.companyId === c.id).forEach((u) => {
        if (Math.random() <= 0.5){
          const currentUsers = models.user.list();
          for(let i = 0; i <= currentUsers.length; i++){
            if (currentUsers[i].id === u.id){
              currentUsers[i].lastActive = new Date();
            }
          }

          // update current users
          models.user.update(currentUsers)
        }
      })
    })

    rebuildCompanyTable()

  }, 3000)

  return timerId
}
