import { DoublyNode } from "../Node";

export default class DoublyLinkedList<T> {
    head: DoublyNode<T> | null;
    tail: DoublyNode<T> | null;
    length: number;

    constructor(head: DoublyNode<T> | null = null){

        if(head !== null && !(head instanceof DoublyNode)){
            head = new DoublyNode(head);
        }

        this.head = head;
        this.tail = head;
        this.length = head ? 1 : 0;
    }

    add(value: T): void {
        let newNode = new DoublyNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
}