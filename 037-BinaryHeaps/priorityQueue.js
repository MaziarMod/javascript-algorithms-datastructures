class PriortyQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let newElementIdx = this.values.length - 1;
    const newElement = this.values[newElementIdx];

    while (newElementIdx > 0) {
      let parentIdx = Math.floor((newElementIdx - 1) / 2);
      let parent = this.values[parentIdx];

      if (newElement.priority >= parent.priority) break;

      this.values[parentIdx] = newElement;
      this.values[newElementIdx] = parent;
      newElementIdx = parentIdx;
    }
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.swap(idx, swap);
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

console.log('-------- Create a Priority Queue ---------> Done!');
let ER = new PriortyQueue();

console.log('-------- Insert into the Priority Queue -------> Done!');
ER.enqueue('common cold', 5);
ER.enqueue('shotgun wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

console.log('-------- Print the Priority Queue -------');
console.log(ER.values);

console.log('-------- Remove or dequeue -------');
console.log(ER.dequeue());

console.log('-------- Print the heap -------');
console.log(ER.values);
