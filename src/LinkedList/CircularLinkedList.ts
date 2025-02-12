import { Node } from "../Node";

export default class CircularLinkedList<T>{
  head: Node<T> | null;
  size: number = 0;

  constructor(head: Node<T> | null = null){
    if(head !== null && !(head instanceof Node)){
      head = new Node(head);
    }
    this.head = head;
    this.size = head ? 1 : 0;
  }

  append(value: T): void{
    let newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      this.head.next = this.head;
    }else{
      let current = this.head;
      while(current.next !== null){
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }
}
