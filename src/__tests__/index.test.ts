import * as exportedModule from '..';
import * as NodeModule from '../Node';
import * as LinkedListModule from '../LinkedList';

describe('Module Exports', () => {
  it('should export Node', () => {
    Object.keys(NodeModule).forEach((key) => {
      expect(exportedModule).toHaveProperty(key);
    });
  });

  it('should export LinkedList', () => {
    Object.keys(LinkedListModule).forEach((key) => {
      expect(exportedModule).toHaveProperty(key);
    });
  });
});
