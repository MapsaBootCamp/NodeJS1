const arr = [2, 3, 4, -1, 12, 8]


const selectionSort = (arr) => {

    arr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        const indexMin = arr.slice(i+1).reduce((minIndex, val, j) => {
            if(arr[minIndex] > val) return i+j+1;
            return minIndex
        }, i);
        if(i !== indexMin) [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
    return arr;
}

console.log(selectionSort(arr));

// arr.reduce((acc, val, index) => {
//     console.log(typeof acc);
//     console.log("acc ", acc);
//     console.log("val ", val);
//     console.log("index ", index);
//     acc.push([index, val])
//     return acc
// }, [])