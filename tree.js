class Node
{
    constructor(value)
    {
        this.value = value
        this.left = null
        this.rigth = null
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null
    }

    insert(value)
    {
        let node = new Node(value)

        if (!this.root)
        {
            this.root = node
            return this
        }

        let next = this.root

        while (true)
        {
            if (value === next.value) return undefined
            if (next.value < value && !!next.rigth) next = next.rigth
            if (next.value > value && !!next.left) next = next.left

            if (next.value < value)
            {
                next.rigth = node
                return this
            }

            if (next.value > value)
            {
                next.left = node
                return this
            }
        }

    }
}


var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.root)