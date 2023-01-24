class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let newElementIdx = this.values.length - 1;
    const newElement = this.values[newElementIdx];

    while (newElementIdx > 0) {
      let parentIdx = Math.floor((newElementIdx - 1) / 2);
      let parent = this.values[parentIdx];

      if (newElement <= parent) break;

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
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
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

console.log('-------- Create a heap ---------> Done!');
let maxBinaryHeap = new MaxBinaryHeap();

console.log('-------- Insert into the heap -------> Done!');
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);

console.log('-------- Print the heap -------');
console.log(maxBinaryHeap.values);

console.log('-------- Insert 55 -------> Done!');
maxBinaryHeap.insert(55);

console.log('-------- Print the heap -------');
console.log(maxBinaryHeap.values);

console.log('-------- Remove or extract max -------');
console.log(maxBinaryHeap.extractMax());

console.log('-------- Print the heap -------');
console.log(maxBinaryHeap.values);
