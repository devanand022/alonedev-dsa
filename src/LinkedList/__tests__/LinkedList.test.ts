import { CircularLinkedList, DoublyLinkedList, LinkedList } from '..';
import { DoublyNode, Node } from '../../Node'


describe('LinkedList', () => {
  test('should create a LinkedList', () => {
    const test = new LinkedList<number>(new Node<number>(0));
    expect(test).toBeDefined();
  })

  test('should add a new element to the LinkedList', () => {
    const test = new LinkedList<number>();
    expect(test.isEmpty()).toBe(true);
    test.add(1);
    expect(test.isEmpty()).toBe(false);
    expect(test.sizeOfList()).toBe(1);
    test.add(2);
    test.add(3);
    expect(test.sizeOfList()).toBe(3);
    expect(test.indexOf(3)).toBe(2);
    expect(test.indexOf(5)).toBe(-1);
  })

  test('check the Index of an element in the LinkedList', () => {
    const test = new LinkedList<number>();
    test.add(1);
    expect(test.sizeOfList()).toBe(1);
    expect(test.indexOf(1)).toBe(0);
    expect(test.indexOf(5)).toBe(-1);
  })

  test('should insert an elemnet at a specific index', () =>{
    const test = new LinkedList<number>();
    expect(() => test.insertAt(2, 4)).toThrow('Index out of bounds');
    test.insertAt(1, 0);
    test.insertAt(2, 1);
  })

  test('should remove an element from the LinkedList', () => {
    const test = new LinkedList<number>();
    expect(test.removeElement(5)).toBeUndefined();
    test.add(1);
    test.add(2);
    test.add(3);
    test.removeElement(2);
    expect(test.sizeOfList()).toBe(2);
    expect(test.indexOf(2)).toBe(-1);
    expect(test.removeElement(5)).toBeUndefined();
  })
})

describe('DoublyLinkedList', () => {
  test('should create a DoublyLinkedList', () => {
    const test = new DoublyLinkedList<number>(new DoublyNode<number>(0))
    expect(test).toBeDefined();
  });

  test('should add a new element to the DoublyLinkedList', () => {
    const test = new DoublyLinkedList<number>();
    expect(test.isEmpty()).toBe(true);
    test.append(1);
    expect(test.isEmpty()).toBe(false);
    expect(test.sizeOfList()).toBe(1);
    test.append(2);
    expect(test.sizeOfList()).toBe(2);
  });

  test('should add an element at in head of the DoublyLinkedList', () => {
    const test = new DoublyLinkedList<number>();
    test.prepend(1);
    expect(test.sizeOfList()).toBe(1);
    test.prepend(2);
    expect(test.sizeOfList()).toBe(2);
  });

  test('should insert an element at a specific index', () => {
    const test = new DoublyLinkedList<number>();
    expect(() => test.insertAt(2, 4)).toThrow('Index out of bounds');
    test.insertAt(1, 0);
    test.insertAt(2, 1);
    test.append(3);
    test.append(5);
    test.insertAt(4, 2);
  });

  test('should remove an element from the DoublyLinkedList', () => {
    const test = new DoublyLinkedList<number>();
    expect(() => test.remove(5)).toThrow('List is empty');
    test.append(1);
    test.append(2);
    test.append(3);
    test.remove(2);
    expect(test.sizeOfList()).toBe(2);
  });
})

describe('CircularLinkedList', () => {
  test('should create a CircularLinkedList', () => {
    const test = new CircularLinkedList<number>(new Node<number>(0));
    expect(test).toBeDefined();
  });

  test('should add a new element to the CircularLinkedList', () => {
    const test = new CircularLinkedList<number>();
    test.append(1);
    expect(test.sizeOfList()).toBe(1);
    test.append(2);
    expect(test.sizeOfList()).toBe(2);
    test.append(3);
  });

  test('should add an element at the head of the CircularLinkedList', () => {
    const test = new CircularLinkedList<number>();
    test.prepend(1);
    expect(test.sizeOfList()).toBe(1);
    test.prepend(2);
    expect(test.sizeOfList()).toBe(2);
    test.prepend(3);
  });
})
