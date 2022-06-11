class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let node = new Node(val)

        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++

        return this
    }

    pop(){
        if (!this.head) return undefined
        let removed = this.tail
        if (this.length <= 1){
            this.tail = null
            this.head = null
            this.length = 0
            removed.prev = null

            return removed
        }
        this.tail = this.tail.prev
        this.tail.next = null
        removed.prev = null

        this.length--
        return removed
    }
    shift(){
        if (this.length===0) return undefined
        let removed = this.head
        if (this.length === 1){
            this.head = null
            this.tail = null
            this.length = 0
            removed.next = null

            return removed
        }
        this.head = this.head.next
        this.head.prev = null
        removed.next = null

        this.length--
        return removed
    }
}

let list = new DoublyLinkedList()

list.push('jose')
list.push('almeida')
list.push('campos')

console.log('item removido',list.shift())
console.log(list)