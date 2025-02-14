import { LinkedList } from '..';
import { Node } from '../../Node'


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
  test('should create a DoublyLinkedList', () => {})
})
