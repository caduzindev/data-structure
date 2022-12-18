function heapify(array,size,index) {
    let largest = index
    let left = (2*index) + 1
    let right = (2*index) + 2

    if (left < size && array[left] > array[largest]) {
        largest = left;
    }
    if (right < size && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== index) {
        let temp = array[index];
        array[index] = array[largest];
        array[largest] = temp;
        heapify(array, size, largest)
    }
}

const array = [7,3,2,5,6,10,9,8,1]
const calc = Math.floor(array.length/2) - 1

for (let i = calc;i>=0;i--) {
    heapify(array,array.length,i)
}

for (let c = array.length-1;c>0;c--) {
    [array[0],array[c]] = [array[c],array[0]]
    heapify(array,c,0)
}

console.log(array)