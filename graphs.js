class Graph
{
    constructor()
    {
        this.adjacencyList = {}
    }

    addVertex(vertex)
    {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1,vertex2)
    {
        this.addVertex(vertex1)
        this.addVertex(vertex2)

        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2)
    {
        let v1 = this.adjacencyList[vertex1]
        let v2 = this.adjacencyList[vertex2]

        this.adjacencyList[vertex1] = v1.filter(vertex => vertex !== vertex2)
        this.adjacencyList[vertex2] = v2.filter(vertex => vertex !== vertex1)
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(adjacent => this.removeEdge(adjacent, vertex));
        delete this.adjacencyList[vertex];
    }

    transversalDFSIterative(vertex)
    {
        let visited = {}
        let stack = [vertex]
        let result = []

        while (stack.length)
        {
            let next = stack.pop()

            visited[next] = true
            result.push(next)

            this.adjacencyList[next].forEach(v=>{
                if (!visited[v]) {
                    visited[v] = true
                    stack.push(v)
                }
            })
        }

        return result
    }

    transversalDFS(vertex)
    {
        let result = []
        let visited = {}

        this.DFS(vertex,visited,result)

        return result
    }

    DFS(vertex,visited,queue)
    {
        if (visited[vertex]) return

        visited[vertex] = true
        queue.push(vertex)

        this.adjacencyList[vertex].forEach(v=>this.DFS(v,visited,queue))

        return queue
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('F')

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")

// console.log(graph.adjacencyList)
console.log(graph.transversalDFSIterative('A'))
