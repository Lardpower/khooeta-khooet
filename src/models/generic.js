import _ from "lodash";

const storage = window.localStorage;

export class GenericModel {
  constructor() {
    this.name
  }

  preSave(payload){
    payload.dateCreated = new Date();
    payload.dateUpdated = new Date();
  }
  preCreate(payload){
    this.preSave(payload);
  }
  create(payload){
    this.preCreate(payload)
    const items = JSON.parse(storage.getItem(this.name)) || [];

    // push a new item only if its ID is unique across existing ${items}
    if (!items.map((i) => i.id).includes(payload.id)) {
      items.push(payload);
      storage.setItem(`${this.name}`, JSON.stringify(items));
    }
  }

  preUpdate(payload){
    this.preSave(payload);
  }

  update(payload){
    this.preUpdate(payload)
    const items = JSON.parse(storage.getItem(this.name)) || [];
    const item = _.find(items, i => i.id === payload.id);
    _.assign(item, payload)
    storage.setItem(`${this.name}`, JSON.stringify(items));
    return item;
  }

  list(filter){
    const items = JSON.parse(storage.getItem(this.name)) || [];
    return _.filter(items, filter);
  }

  delete(id){
    storage.removeItem(`${this.name}.${id}`);
  }

}
