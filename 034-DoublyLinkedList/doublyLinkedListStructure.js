const nodemon = require('nodemon');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) !!this.unshift(value);
    if (index === this.length) !!this.push(value);

    const newNode = new Node(value);
    const node = this.get(index - 1);

    newNode.next = node.next;
    node.next.prev = newNode;
    node.next = newNode;
    newNode.prev = node;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) this.shift();
    if (index === this.length) this.pop();

    const foundNode = this.get(index);

    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.prev = null;
    foundNode.next = null;

    this.length--;
    return foundNode;
  }
  reverse() {
    let temp = null;
    let current = this.head;

    while (current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp != null) {
      this.head = temp.prev;
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

console.log('------ Create The List ------');
const DLL = new DoublyLinkedList();
DLL.push(100);
DLL.push(80);
DLL.push(120);
console.log(DLL);

console.log('------ Pop ------');
DLL.pop();
console.log(DLL);

console.log('------ Shift ------');
DLL.shift();
console.log(DLL);

console.log('------ Unshift ------');
DLL.unshift(1000);
console.log(DLL);

console.log('------ Get ------');
console.log(DLL.get(-1));

console.log('------ Set ------');
console.log(DLL.set(0, 123456));
console.log(DLL);

console.log('------ Insert ------');
console.log(DLL.insert(1, 66666));
console.log(DLL.insert(1, 55555));
console.log(DLL.insert(3, 33333));
DLL.forEach((node) => console.log(node.val));

console.log('------ Remove ------');
console.log(DLL.remove(2));
DLL.forEach((node) => console.log(node.val));

console.log('------ Reverse ------');
console.log(DLL.reverse());
DLL.forEach((node) => console.log(node.val));
