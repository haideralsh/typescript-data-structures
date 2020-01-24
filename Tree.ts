class Node {
  id: string;
  children: Array<Node>;

  constructor(id: string = null, children: Array<Node> = []) {
    this.id = id;
    this.children = children;
  }

  append(node: Node) {
    node.children = [...node.children, node];
  }
}

export default class Tree {
  root: Node;

  constructor(root: Node = null) {
    this.root = root;
  }

  addTo(parentId: string, node: Node) {
    if (this.root === null) {
      this.root = node;
    }

    const parent = this.find(parentId);
    parent.append(node);
  }

  find(id: string, root: Node = this.root): Node {
    if (root.id === id) return root;

    /* FIXME
     Depth-first-search recursion is not working  
     if the node doesn't have children, 
     the method will not recurse on 
     its sibilings.
     */
    if (root.children.length > 0) {
      for (const child of root.children) {
        return this.find(id, child);
      }
    }

    return null;
  }
}
