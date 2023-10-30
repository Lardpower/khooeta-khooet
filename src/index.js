import _ from 'lodash';
import {table} from './components'
import {models} from './models'
import {dataGenerator} from './dataGenerator'

dataGenerator();
const companies = models.company.list();
const tableContainer = document.getElementById('table-container');
tableContainer.appendChild(table(companies));