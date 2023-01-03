// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.value = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const previousNode = this.get(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;

    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

// Demonstration of how we are adding nodes to the SLL
// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

var list = new SinglyLinkedList();

console.log('------ Create The List ------');
list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.push('See You Soon');
list.forEach((node) => console.log(node.value));
console.log('------ Pop ------');
list.pop();
list.forEach((node) => console.log(node.value));
console.log('------ Shift ------');
list.shift();
list.forEach((node) => console.log(node.value));
console.log('------ Unshift ------');
list.unshift('Hi, ');
console.log(list.forEach((node) => console.log(node.value)));
console.log('------ Get ------');
console.log(list.get(1));
console.log('------ Set ------');
list.set(1, 'Wooooooow!!!');
console.log(list.forEach((node) => console.log(node.value)));
console.log('------ Insert ------');
list.insert(1, 'This is a new node');
console.log(list.forEach((node) => console.log(node.value)));
console.log('------ Remove ------');
list.remove(2);
console.log(list.forEach((node) => console.log(node.value)));
console.log('------ Reverse ------');
list.reverse();
console.log(list.forEach((node) => console.log(node.value)));
