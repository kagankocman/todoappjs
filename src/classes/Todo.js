export class Todo {
  constructor(value, desc, id = Date.now(), isDeleted = false) {
    this.id = id;
    this.desc = desc;
    this.value = value;
    this.isDeleted = isDeleted;
  }
}
