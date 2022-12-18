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
class BuildString {
  #value = '';
  getValue() {
    return this.#value
  }
  increment(str){
    this.#value += str
  }
}
class IntCounter {
  #value = 0;
  constructor(val){
    this.#value = val
  }
  getValue() {
    return this.#value
  }
  increment(){
    this.#value++
  }
}
class Codec {
    serializeHelper(root,str,counter,parentId) {
      if (!root) return
      str.increment(String(counter.getValue()))
      str.increment(String(root.val))
      str.increment(parentId < 1 ? 'N' : String(parentId))
      parentId = counter.getValue()

      for (let child of root.children) {
        counter.increment()
        this.serializeHelper(child,str,counter,parentId)
      }

      return str
    }
    serialize = function(root) {
      const string = new BuildString()
      this.serializeHelper(root,string,new IntCounter(1),0)
      return string.getValue()
    };
    deserialize = function(data) {
      const hashmap = new Map()

      for (let d=0;d<data.length;d += 3) {
        let id = data[d]
        let value = data[d+1]
        let parentId = data[d+2]

        hashmap.set(id,{node: new Node(value,[]),parentId})
      }

      for (let d=0;d<data.length;d += 3) {
        let id = data[d]

        let info = hashmap.get(id)
        let node = info.node

        let parentId = info.parentId
        if (parentId === 'N') continue

        let parentNode = hashmap.get(parentId)
        parentNode.node.children.push(node)
      }

      return hashmap
    };
}

let instance = new Codec()
let serialize = instance.serialize(buildTree())
console.log(serialize)
console.log(instance.deserialize(serialize))