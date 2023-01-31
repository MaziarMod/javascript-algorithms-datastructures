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
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].map((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);
    return result;
  }
}

console.log('\n-------- Create a Graph (named: graph) ---------> Done!');
let graph = new Graph();

console.log('\n-------- Create Vertices ---------> Done!');
graph.addVertex('zz plant');
graph.addVertex('orchid');
graph.addVertex('crspy wave');

console.log('\n-------- Create Edges ---------> Done!');
graph.addEdge('zz plant', 'orchid');
graph.addEdge('zz plant', 'crspy wave');
graph.addEdge('orchid', 'crspy wave');

console.log('\n-------- Print  adjacencyList ---------> Done!');
console.log(graph.adjacencyList);

console.log('\n-------- Remove an Edge ---------> Done!');
graph.removeEdge('zz plant', 'orchid');

console.log('\n-------- Print  adjacencyList ---------> Done!');
console.log(graph.adjacencyList);

console.log('\n-------- Remove a Vertex ---------> Done!');
graph.removeVertex('zz plant');

console.log('\n-------- Print  adjacencyList ---------> Done!');
console.log(graph.adjacencyList);

console.log(
  '\n-------- Create a Graph (named: graph2) and add Vertices and Edges---------> Done!'
);
const graph2 = new Graph();

graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addVertex('D');
graph2.addVertex('E');
graph2.addVertex('F');

graph2.addEdge('A', 'B');
graph2.addEdge('A', 'C');
graph2.addEdge('B', 'D');
graph2.addEdge('C', 'E');
graph2.addEdge('D', 'E');
graph2.addEdge('D', 'F');
graph2.addEdge('E', 'F');

console.log('\n-------- Traverse Graph2 (Recursive)---------> Done!');
console.log('-------- The graph is like this ---------');
console.log('          A');
console.log('        /   \\');
console.log('       B     C');
console.log('       |     |');
console.log('       D --- E');
console.log('        \\   /');
console.log('          F');

console.log(graph2.depthFirstRecursive('A'));
