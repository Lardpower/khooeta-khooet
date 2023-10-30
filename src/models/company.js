import {GenericModel} from './generic'

const properties = [
  { id: 'id', name: 'Id', type: 'number', required: true },
  { id: 'name', name: 'Name', type: 'string', required: true },
  { id: 'value', name: 'Value', type: 'number' },
  { id: 'h', name: 'Health', type: 'number' },
  { id: 'userCount', name: 'User count', type: 'number' },
  { id: 'industry', name: 'Industry', type: 'string' },
  { id: 'dateCreated', name: 'Created', type: 'date' },
  { id: 'dateUpdated', name: 'Modified', type: 'date' },
]

class Company extends GenericModel {
  constructor() {
    super()
    this.properties = properties
    this.name = 'Company'
  }
}

export const company = new Company()
