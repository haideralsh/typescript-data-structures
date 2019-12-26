import Collection from "./Collection";

export default class Stack<T> extends Collection<T> {
  push = (el: T): Array<T> => (this.collection = [...this.collection, el]);

  pop = (): Array<T> =>
    (this.collection = [
      ...this.collection.slice(0, this.collection.length - 1)
    ]);

  peek = (): T => this.collection[this.collection.length - 1] ?? null;
}
