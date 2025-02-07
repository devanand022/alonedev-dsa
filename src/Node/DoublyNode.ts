import Node from "./Node";

export default class DoublyNode<T> extends Node<T> {
  prev: DoublyNode<T> | null;
  constructor(value: T) {
    super(value);
    this.prev = null;
  }
}
