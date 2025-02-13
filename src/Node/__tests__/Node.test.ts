import { DoublyNode, Node } from '..';

describe('Node', () => {
  test('should create a new node', () => {
    let node = new Node(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  })
})

describe('DoublyNode', () => {
  test('should create a new doubly node', () => {
    let node = new DoublyNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  })
})
