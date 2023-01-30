class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].map((v) => this.removeEdge(v, vertex));
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex('zz plant');
graph.addVertex('orchid');
graph.addVertex('crspy wave');

graph.addEdge('zz plant', 'orchid');
graph.addEdge('zz plant', 'crspy wave');
graph.addEdge('orchid', 'crspy wave');

console.log(graph.adjacencyList);

graph.removeEdge('zz plant', 'orchid');
console.log(graph.adjacencyList);

graph.removeVertex('zz plant');
console.log(graph.adjacencyList);
