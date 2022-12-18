class Node {
    constructor(value) {
        this.data = value;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
   inOrderTraversal() {
        const traverse = (root) => {
            if (root == null) {
                return;
            }
            traverse(root.left);
            console.log(root.data);
            traverse(root.right);
        }
        traverse(this.root);
   }
}
function createCompleteBinaryTreeFromArray(arr) {
    const length = arr.length;
    const binaryTree = new BinaryTree();
    const traverseAndReplace = (root, i) => {
        if (i < length) {
            root = new Node(arr[i]);
            root.left = traverseAndReplace(root.left, 2 * i + 1);
            root.right = traverseAndReplace(root.right, 2 * i + 2);
        }
        return root;
    }
    binaryTree.root = traverseAndReplace(binaryTree.root, 0);
    return binaryTree;
}
const result = createCompleteBinaryTreeFromArray([9,14,14,74,null,null,74,null,12,12,null,63,null,null,63,-8,null,null,-8,-53,null,null,-53,null,-96,-96,null,-65,null,null,-65,98,null,null,98,50,null,null,50,null,91,91,null,41,-30,-30,41,null,86,null,-36,-36,null,86,null,-78,null,9,null,null,9,null,-78,47,null,48,-79,-79,48,null,47,-100,-86,null,47,null,67,67,null,47,null,-86,-100,-28,11,null,56,null,30,null,64,64,null,30,null,56,null,11,-28,43,54,null,-50,44,-58,63,null,null,-43,-43,null,null,63,-58,44,-50,null,54,43]);

console.log(result)