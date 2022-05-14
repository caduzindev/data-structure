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
        // na primeira execução seria o node1
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
}

list = new SinglyLinkedList()
list.push('carlos')
list.push('eduardo')

console.log('total',list)
console.log(list.pop())
console.log('pop',list)
