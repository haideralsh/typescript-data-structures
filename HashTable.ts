export default class HashTable {
  private _table = [];
  private _size = 0;

  constructor(size = 32) {
    this._size = size;
  }

  get size(): number {
    return this._size;
  }

  private hash = key =>
    [...key].reduce((hash, char) => hash + char.charCodeAt(0), 0) % this._size;

  set = (key, value) => (this._table[this.hash(key)] = value);

  get = key => this._table[this.hash(key)] ?? null;

  delete = key => (this._table[this.hash(key)] = undefined);

  has = key => this._table[this.hash(key)] !== undefined;
}
