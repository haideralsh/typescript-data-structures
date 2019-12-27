export default class HashTable {
  private table = [];
  size = 0;

  constructor(size = 32) {
    this.size = size;
  }

  private hash = key =>
    [...key].reduce((hash, char) => hash + char.charCodeAt(0), 0) % this.size;

  set = (key, value) => (this.table[this.hash(key)] = value);

  get = key => this.table[this.hash(key)] ?? null;

  delete = key => (this.table[this.hash(key)] = undefined);

  has = key => this.table[this.hash(key)] !== undefined;
}
