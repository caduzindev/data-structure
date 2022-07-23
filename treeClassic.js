class Node
{
    constructor(val)
    {
        this.val = val
        this.left = null
        this.rigth = null
    }
}

class Tree
{
    constructor()
    {
        this.root = null
    }
    bfs(queue=[this.root],visited=[])
    {
        if (!this.root) return undefined
        if (queue.length < 1) return visited

        let node = queue.shift()
        visited.push(node.val)

        if (node.left) queue.push(node.left)
        if (node.rigth) queue.push(node.rigth)

        return this.bfs(queue,visited)
    }
    bfsPreOrder()
    {
        if (!this.root) return undefined
        return this.preOrder(this.root)
    }
    preOrder(node,visited=[])
    {
        if (!node) return
        visited.push(node.val)
        this.preOrder(node.left,visited)
        this.preOrder(node.rigth,visited)
        return visited
    }
    dfsPostOrder()
    {
        if (!this.root) return undefined
        let visited = []
        let queue = this.postOrder(this.root)

        while (queue.length)
        {
            visited.push(queue.pop())
        }
        return visited
    }
    postOrder(node,queue=[])
    {
        if (!node) return
        queue.push(node.val)
        this.postOrder(node.rigth,queue)
        this.postOrder(node.left,queue)
        return queue
    }
    dfsInOrder()
    {
        if (!this.root) return undefined

        let result = this.InOrder(this.root)

        return result
    }
    InOrder(node,visited=[])
    {
        if (!node) return
        this.InOrder(node.left,visited)
        visited.push(node.val)
        this.InOrder(node.rigth,visited)

        return visited
    }
}

/**
      10
    6   15
  3  8   20
 */

let tree = new Tree()
tree.root = new Node(10)
tree.root.left = new Node(6)
tree.root.rigth = new Node(15)
tree.root.left.left = new Node(3)
tree.root.left.rigth = new Node(8)
tree.root.rigth.rigth = new Node(20)

console.log(tree.dfsInOrder())