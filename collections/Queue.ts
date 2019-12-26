import Collection from "./Collection";

export default class Queue<T> extends Collection<T> {
  add = (el: T): Array<T> => (this.collection = [...this.collection, el]);

  remove = (): Array<T> => (this.collection = [...this.collection.slice(1)]);

  peek = (): T => this.collection[0] ?? null;
}
