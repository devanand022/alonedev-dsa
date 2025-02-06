import Node from '../Node';

export default class LinkedList<T>{
    head: Node<T> | null;
    size: number;
    
    constructor(head: Node<T> | null = null){
        this.head = head;
        this.size = 0;
    }

    add(value: T): void{
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
}