import { Node } from "../Node";

export default class LinkedList<T> {
  head: Node<T> | null;
  size: number;

  constructor(head: Node<T> | null = null) {
    if (head !== null && !(head instanceof Node)) {
      head = new Node(head);
    }

    this.head = head;
    this.size = head ? 1 : 0;
  }

  add(value: T): void {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  indexOf(element: number): number {
    let count: number = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  insertAt(value: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    } else {
      let newNode = new Node(value);

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let curr: Node<T> | null = this.head;
        let prev: Node<T> | null = null;
        let it = 0;
        while (it < index && curr !== null) {
          it++;
          prev = curr;
          curr = curr?.next;
        }
        if (prev !== null) {
          newNode.next = curr;
          prev.next = newNode;
        }
      }
      this.size++;
    }
  }

  removeElement(value: T): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value === value) {
      const removedValue = this.head.value;
      this.head = this.head.next;
      this.size--;
      return removedValue;
    }

    let curr: Node<T> | null = this.head;
    let prev: Node<T> | null = null;

    while (curr !== null && curr.value !== value) {
      prev = curr;
      curr = curr.next;
    }

    if (curr === null) {
      return undefined;
    }

    if (prev) {
      prev.next = curr.next;
    }

    this.size--;
    return curr.value;
  }

  //Helper function to get the node at a given index

  isEmpty(): boolean {
    return this.size === 0;
  }

  sizeOfList(): number {
    return this.size;
  }

  printList(): void {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }
}
