class MaxBinaryHeap
{
    constructor ()
    {
        this.values = []
    }

    insert(value)
    {
        this.values.push(value)
        let index = this.values.length - 1
        let parentIndex = Math.floor((index-1)/2)

        while (value > this.values[parentIndex])
        {
            [this.values[index],this.values[parentIndex]] = [this.values[parentIndex],this.values[index]]

            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }

    extractMax()
    {
        let index = 0
        let oldRoot = this.values[index]
        this.values[index] = this.values.pop()

        let left = Math.floor((2*index)+1)
        let rigth = Math.floor((2*index)+2)

        let obj = {}

        while (true)
        {
            if (this.values[left] > this.values[rigth]) obj.great = 'left'
            else obj.great = 'rigth'

            if (obj.great === 'left' && this.values[index] < this.values[left])
            {
                [this.values[index],this.values[left]] = [this.values[left],this.values[index]]
                index = left
            }

            if (obj.great === 'rigth' && this.values[index] < this.values[rigth])
            {
                [this.values[index],this.values[rigth]] = [this.values[rigth],this.values[index]]
                index = rigth
            }

            left = Math.floor((2*index)+1)
            rigth = Math.floor((2*index)+2)

            // if (this.values[left] < this.values[index] && this.values[rigth] < this.values[index]) break
        }

        return oldRoot
    }
}

let array = [41,39,33,18,27,12]

let maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.values = array

maxBinaryHeap.insert(55)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)