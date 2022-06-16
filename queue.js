class Node {
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor()
    {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        let node = new Node(val)

        if (!this.head) {
            this.head = node
            this.tail = this.head
        }else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++
        return this
    }

    dequeue(){
        if (!this.head) return undefined
        if (!this.head.next) {
            let removed = this.head
            this.head = null
            this.tail = null
            this.size = 0

            return removed
        }

        let removed = this.head
        this.head = this.head.next
        this.size--

        return removed

    }
}