import {GenericModel} from './generic'

const properties = [
  { id: 'id', name: 'ID', type: 'number', required: true },
  { id: 'companyId', name: 'Company ID', type: 'string', required: true },
  { id: 'createdDate', name: 'Created at', type: 'date' },
  { id: 'lastActive', name: 'Last active at', type: 'date' },
]

class User extends GenericModel {
  constructor() {
    super()
    this.properties = properties
    this.name = 'User'
  }
}

export const user = new User()
