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
    unshift(val){
        let node = new Node(val)
        if (this.length === 0){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node

            this.length++
        }
    }
    get(index) {
        if (index >= this.length || index < 0) return null
        if (index === 0) return this.head
        if (index+1 === this.length) return this.tail

        let currentHead = null
        let currentTail = null

        if (index <= Math.floor(this.length/2)) currentHead = this.head
        else currentTail = this.tail

        if (currentHead) {
            for (let i = 0;i<index;i++) currentHead = currentHead.next

            return currentHead
        }

        for (let i = index;i<this.length;i++) currentTail = currentTail.prev

        return currentTail

    }
}

let list = new DoublyLinkedList()

list.push('jose')
list.push('almeida')
list.push('campos')

console.log(list.get(2))