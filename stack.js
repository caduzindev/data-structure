class Node {
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor()
    {
        this.first = null
        this.last = null
        this.size = 0
    }

   pop(){
        if (!this.head) return undefined
        if (!this.head.next) {
            let removed = this.head
            this.head = null
            this.tail = null
            this.length = 0

            return removed
        }

        let removed = this.head
        this.head = this.head.next
        this.length--

        return removed

    }
    push(val){
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
            this.length++

            return node
        }

        node.next = this.head
        this.head = node
        this.length++
        return node
    }
}