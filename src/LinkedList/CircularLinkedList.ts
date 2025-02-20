import { Node } from '../Node';

export default class CircularLinkedList<T> {
  head: Node<T> | null;
  size: number = 0;

  constructor(head: Node<T> | null = null) {
    this.head = head;
    this.size = head ? 1 : 0;
  }

  append(value: T): void {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== null && current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }

  prepend(value: T): void {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== null && current.next !== this.head) {
        current = current.next;
      }
      newNode.next = this.head;
      this.head = newNode;
      current.next = this.head;
    }
    this.size++;
  }

  remove(value: T): void | number {
    if (!this.head) return -1;

    let current = this.head;
    let prev: Node<T> | null = null;

    do {
      if (current.value === value) {
        if (this.size === 1) {
          this.head = null;
        } else if (current === this.head) {
          let tail: Node<T> = this.head;
          while (tail.next && tail.next !== this.head) {
            tail = tail.next;
          }
          this.head = this.head.next;
          tail.next = this.head;
        } else {
          prev!.next = current.next;
        }
        this.size--;
        return;
      }
      prev = current;
      current = current.next!;
    } while (current !== this.head);
    return -1;
  }

  //Helper Function

  sizeOfList(): number {
    return this.size;
  }
}
