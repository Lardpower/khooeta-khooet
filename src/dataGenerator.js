import {models} from './models'

const initCompanies = [
  {id:1, name: 'Amazon', h: 4},
  {id:2, name: 'Google', h: 5},
  {id:3, name: 'Spotify', h: 10},
  {id:4, name: 'Klarna', h: 3},
]
export function dataGenerator() {
  _.each(initCompanies, c => {
    models.company.create(c);
  })
}
