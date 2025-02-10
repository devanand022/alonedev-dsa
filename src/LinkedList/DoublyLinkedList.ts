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

    insertStart(value: T){
        let newNode = new DoublyNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = new DoublyNode(value);
            this.head = newNode;
        }
        this.length++;
    }

    //Helper Function

    isEmpty(): boolean{
        if(this.length === 0){
            return true;
        }
        return false;
    }

    display(): void{
        if(!this.isEmpty()){
            let current: DoublyNode<T> | null = this.head;
            let str = "";
            while (current !== null) {
              str += current.value + " ";
              current = current.next;
              console.log(current)
            }
            console.log(str)
        }
    }
}