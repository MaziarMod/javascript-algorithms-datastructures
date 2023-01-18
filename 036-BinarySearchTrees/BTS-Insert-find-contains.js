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
}

console.log('-------- Create a Tree ---------> Done!');
let tree = new BinarySearchTree();

console.log('-------- Insert into the Tree -------> Done!');
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log('-------- find 7 in the tree--------- ');
console.log(tree.find(7));

console.log('-------- Check if tree contains 16--------- ');
console.log(tree.contains(16));
