// N-ary Tree
// JavaScript implementation of the approach
// Class for the node of the tree
class Node
{
    constructor(n, data)
    {
        this.data = data;
        this.children = Array(n);
    }
}

function inorder(node)
{
    if (node == null)
        return;

    var total = node.children.length;

    for (var i = 0; i < total - 1; i++)
        inorder(node.children[i]);

    console.log(node.data)

    inorder(node.children[total - 1]);
}

var n = 3;
var root = new Node(n, 1);
root.children[0] = new Node(n, 2);
root.children[1] = new Node(0, 3);
root.children[2] = new Node(0, 4);
root.children[0].children[0] = new Node(0, 5);
root.children[0].children[1] = new Node(0, 6);
root.children[0].children[2] = new Node(0, 7);
inorder(root);