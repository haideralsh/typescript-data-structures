export default class HashTable {
  private table = [];

  private hash = key =>
    [...key].reduce((hash, char) => hash + char.charCodeAt(0), 0) %
    this.table.length;

  set = (key, value) => (this.table[this.hash(key)] = value);

  get = key => this.table[this.hash(key)];

  delete = key => (this.table[this.hash(key)] = undefined);

  has = key => this.table[this.hash(key)] !== undefined;
}
