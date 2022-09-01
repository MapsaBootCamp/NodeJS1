// const arr = [2, 3, 4, -1, 12, 8, 8]
const arr = [10, 80, 30, 90, 40, 50, 70]

const mergeSort = (arr) => {

    if(arr.length < 2) return arr;
   
    const midIndex = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, midIndex));
    const right = mergeSort(arr.slice(midIndex));


    const result = []
    while(true){
        if(left.length == 0 || right.length == 0) break;
        left[0] > right[0] ?  result.push(right.shift()) : result.push(left.shift())
    }
    if(left.length == 0) return [...result, ...right]
    return [...result, ...left]
}

// console.log(mergeSort(arr));

module.exports = {
    mergeSort
}

