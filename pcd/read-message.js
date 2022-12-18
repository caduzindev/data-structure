const fs = require('fs')

function arrayMessagesToTree(messages) {
  let table = new Map()

  for (let msg of messages) {
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

  return table.get('1')
}

const messages = fs.readFileSync('./messages.json',{ encoding: 'utf-8' })
const parse = JSON.parse(messages)
console.log(arrayMessagesToTree(parse.messages))