export class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}
export class DoublyNode<T> extends Node<T> {
  prev: DoublyNode<T> | null;
  next: DoublyNode<T> | null;
  constructor(
    value: T,
    next: DoublyNode<T> | null = null,
    prev: DoublyNode<T> | null = null,
  ) {
    super(value, next);
    this.next = next;
    this.prev = prev;
  }
}
