function Node(val, children) {
  this.val = val;
  this.children = children;
};
function buildTree() {
  const node6 = new Node(6,[])
  const node5 = new Node(5,[])
  const node4 = new Node(4,[])
  const node2 = new Node(2,[])
  const node3 = new Node(3,[node5,node6])
  const node1 = new Node(1,[node3,node2,node4])

  return node1
}
const helper = (root,visited)=>{
  visited.push(root.val)
  let childrens = root.children

  for (let c of childrens) {
    helper(c,visited)
  }
}
var preorder = function(root) {
  let visited = []
  helper(root,visited)
  return visited
};

const preorderIterative = (root) => {
  let stack = []
  let result = []

  stack.push(root)
  while(stack.length > 0) {
    let node = stack.pop()
    result.push(node.val)
    let childrens = node.children.reverse()

    for (let c of childrens) {
      stack.push(c)
    }
  }

  return result
}

console.log(preorderIterative(buildTree()))