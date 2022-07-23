// JavaScript program to do level order traversal
// of a generic tree


// Represents a node of an n-ary tree
class Node
{
    constructor()
    {
        this.key = 0;
        this.child = [];
    }
};

// Utility function to create a new tree node
function newNode(key)
{
    var temp = new Node();
    temp.key = key;
    return temp;
}

// Prints the n-ary tree level wise
function LevelOrderTraversal(root)
{
    if (root == null)
        return;

    // Standard level order traversal code
    // using queue
    var q = []; // Create a queue
    q.push(root); // push root
    while (q.length != 0)
    {
        var n = q.length;

        // If this node has children
        while (n > 0)
        {
            // Dequeue an item from queue
            // and print it
            var p = q[0];
            q.shift();
            console.log(p.key + " ");

            // push all children of
            // the dequeued item
            for (var i = 0; i < p.child.length; i++)
                q.push(p.child[i]);
            n--;
        }

        // Print new line between two levels
        console.log("<br>");
    }
}

// Driver Code
/* Let us create below tree
*    2
    | \
    9 10
/|\
*/
var root = newNode(10);
root.child.push(newNode(9))
root.child.push(newNode(10))
root.child[0].child.push(newNode(4))
root.child[0].child.push(newNode(6))
root.child[0].child.push(newNode(3))
root.child[1].child.push(newNode(24))

LevelOrderTraversal(root);