class Node
{
    constructor(val)
    {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList
{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0;
    }

    push(val){
        let node = new Node(val)

        if (!this.head) {
            this.head = node
            this.tail = this.head
        }else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++
        return this
    }

    pop(){
        if (!this.head) return undefined
        if (this.length === 1) {
            let removed = this.head
            this.head = null
            this.tail = null
            this.length = 0

            return removed
        }

        let current = this.head
        let removed = null

        while (true) {
            if (current.next.next === null) {
                removed = current.next
                current.next = null
                break
            }
            current = current.next
        }

        this.tail = current
        this.length--
        return removed
    }
    shift(){
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
    unshift(val){
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
    get(index){
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0;i<index;i++) current = current.next

        return current
    }
    set(index,val){
        let item = this.get(index)
        if (!item) return false
        item.val = val

        return true
    }
    insert(index,val){
        if (index < 0 || val > this.length) return false

        if (index === this.length) {
            this.push(val)
            this.length++
            return true
        }

        if (index === 0) {
            this.unshift(val)
            this.length++
            return true
        }

        let nodeExists = this.get(index)

        if (!nodeExists) {
            return false
        }

        let node = new Node(val)
        let current = this.head

        for (let i = 0;i<index+1;i++) {
            if (i + 1 === index) {
                node.next = current.next
                current.next = node

                break
            }
            current = current.next
        }

        this.length++
        return true
    }
}

list = new SinglyLinkedList()

list.push('carlos')
list.push('almeida')

console.log('old list', list)

list.insert(1,'eduardo')

console.log('actual list', list)