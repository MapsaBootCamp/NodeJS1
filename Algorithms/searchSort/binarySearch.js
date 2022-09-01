const {mergeSort} = require("./mergeSort")
const arr = [10, 30, 40, 50, 70, 80, 90]


function binarySearchIterative(arr, searchItem){
    let min = 0;
    let max = arr.length - 1;
    while(max >= min){
        let mid = Math.floor((max + min) / 2)
        if(arr[mid] === searchItem)
            return mid
        else if(arr[mid] < searchItem){
            min = mid + 1;
        }else{
            max = mid - 1;
        }
    }
    return -1;
}

function binarySearchRecursive(arr, searchItem, start=0, end=null){

    if(end === null) end = arr.length - 1;

    if(end < start) return -1;

    let mid = Math.floor((end + start) /2);

    if(arr[mid] == searchItem) return mid;
    else if(searchItem < arr[mid]) return binarySearchRecursive(arr, searchItem, start, mid -1);
    return binarySearchRecursive(arr, searchItem, mid + 1, end);
}

console.log(binarySearchRecursive(mergeSort(arr), 43));