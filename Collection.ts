export default abstract class Collection<T> {
  collection = new Array<T>();

  get length(): number {
    return this.collection.length;
  }

  isEmpty = (): boolean => this.collection.length < 1;
}
