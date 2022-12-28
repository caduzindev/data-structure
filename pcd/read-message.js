const fs = require('fs')

class Node {
  constructor(val,children) {
    this.val = val
    this.children = children
  }
}

class Message {
  arrayMessagesToTrees(messages) {
    let table = new Map()
    let roots = []

    for (let msg of messages) {
      if (msg.parentId === null) roots.push(msg.id)
      if (!table.has(msg.id)) table.set(msg.id,{...msg, children:[]})
    }

    for (let msg of messages) {
      const node = table.get(msg.id)
      const parentId = node.parentId

      if (parentId === null) continue

      const parentNode = table.get(parentId)
      parentNode.children.push(node)

      table.set(parentId,parentNode)
    }

    return {
      roots,
      data: table
    }
  }
  buildTreeMessage(root,data) {
    let node = new Node()
    node.val = data.get(root)
    node.children = []

    for (const c of data.get(root).children) {
      node.children.push(this.buildTreeMessage(c.id,data))
    }

    return node
  }
}

const messages = fs.readFileSync('./messages.json',{ encoding: 'utf-8' })
const parse = JSON.parse(messages)
const message = new Message()

const { roots,data } = message.arrayMessagesToTrees(parse.messages)
const trees = roots.map(root => message.buildTreeMessage(root,data))

console.log(trees)