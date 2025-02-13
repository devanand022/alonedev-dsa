import { LinkedList } from '..';
import { Node } from '../../Node'


describe('LinkedList', () => {
  test('should create a LinkedList', () => {
    const linkedList = new LinkedList<number>(new Node<number>(0));
    expect(linkedList).toBeDefined();
    linkedList.add(1);
    expect(linkedList.size).toBe(2);
    expect(linkedList.indexOf(1)).toBe(1)
  })
})
