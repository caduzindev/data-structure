class Node
{
    constructor(val)
    {
        this.val = val
        this.next = null
    }
}
// Serve para quando você apenas adicionar e remover itens, pois diferentemente de um array
// Não e preciso reendexar os itens
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
        if (index < 0 || index > this.length) return false

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

        let node = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = node
        node.next = temp

        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length-1) return this.pop().val
        if (index === 0) return this.shift().val

        let prev = this.get(index-1)
        let removed = prev.next
        let next = removed.next

        prev.next = next
        this.length--
        return removed.val
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

list = new SinglyLinkedList()

list.push('carlos')
list.push('eduardo')
list.push('almeida')
list.push('silva')

/**
carlos => null
eduardo => carlos
almeida => eduardo
*/

console.log('old list', list)
list.reverse()
console.log('actual list', list)