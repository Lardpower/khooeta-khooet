import {GenericModel} from './generic'

const properties = [
  { id: 'id', name: 'Id', type: 'number', required: true },
  { id: 'name', name: 'Name', type: 'string', required: true },
  { id: 'h', name: 'health', type: 'number' },
  { id: 'dateCreated', name: 'Created', type: 'date' },
  { id: 'dateUpdated', name: 'Modified', type: 'date' },
]

class Company extends GenericModel {
  constructor() {
    super();
    this.properties = properties;
    this.name = 'Company';
  }
}

export const company = new Company();