class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return current.value;
  }

  forEach(fn) {
    let node = this.first;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

var stack = new Stack();

console.log('------ Create Stack ------');
stack.push('First');
stack.push('Second');
stack.push('Third');
stack.push('Fourth');
stack.forEach((node) => console.log(node.value));

console.log('------ Pop ------');
stack.pop();
stack.forEach((node) => console.log(node.value));
