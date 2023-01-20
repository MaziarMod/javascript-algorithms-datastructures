class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val > current.value) {
        current = current.right;
      } else if (val < current.value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  contains(val) {
    if (!this.root) return false;

    let current = this.root;
    let found = null;

    while (current && !found) {
      if (val > current.value) {
        current = current.right;
      } else if (val < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    const queue = [];
    const visited = [];
    let node = this.root;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  DFSPreOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }

  DFSPostOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(current);
    return visited;
  }
  DFSInOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }
}

console.log('-------- Create a Tree ---------> Done!');
let tree = new BinarySearchTree();

console.log('-------- Insert into the Tree -------> Done!');
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log('-------- find 8 in the tree--------- ');
console.log(tree.find(8));

console.log('-------- Check if tree contains 15--------- ');
console.log(tree.contains(15));

console.log('-------- BFS--------- ');
console.log(tree.BFS());

console.log('-------- DFS PreOrder--------- ');
console.log(tree.DFSPreOrder());

console.log('-------- DFS PostOrder--------- ');
console.log(tree.DFSPostOrder());

console.log('-------- DFS InOrder--------- ');
console.log(tree.DFSInOrder());
