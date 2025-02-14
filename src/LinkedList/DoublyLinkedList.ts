import { DoublyNode } from '../Node';

export default class DoublyLinkedList<T> {
  public head: DoublyNode<T> | null;
  public tail: DoublyNode<T> | null;
  private length: number;

  constructor(head: DoublyNode<T> | null = null) {
    this.head = head;
    this.tail = head;
    this.length = head ? 1 : 0;
  }

  append(value: T): void {
    let newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value: T): void {
    let newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  insertAt(value: T, index: number): void {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    let newNode = new DoublyNode(value);
    let current: DoublyNode<T> | null = this.head;
    let i = 0;

    while (current && i < index - 1) {
      current = current.next;
      i++;
    }

    if (current) {
      newNode.next = current.next;
      newNode.prev = current;
      if (current.next) {
        current.next.prev = newNode;
      }
      current.next = newNode;
      this.length++;
    }
  }

  remove(value: T): void {
    if (!this.head) {
      return;
    }

    let current: DoublyNode<T> | null = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        this.length--;
        return;
      }
      if (current.next) {
        current = current.next;
      }
    }
  }

  //Helper Function

  isEmpty(): boolean {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  display(): void {
    if (!this.isEmpty()) {
      let current: DoublyNode<T> | null = this.head;
      let str = '';
      while (current !== null) {
        str += current.value + ' ';
        current = current.next;
        console.log(current);
      }
      console.log(str);
    }
  }
}
