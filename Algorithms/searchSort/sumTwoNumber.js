arr = [2, 3, 5, 7, 12, 42, 89, 103]

function findSumIndex(arr, sumSearchItem){
    let start = 0;
    let end = arr.length -1;

    while(start < end){
        let sumTemp = arr[start] + arr[end];
        if(sumTemp === sumSearchItem) return [start, end]
        else if(sumTemp > sumSearchItem) end--;
        else start++;
    }
    return -1;
}

function findSumIndexRecursive(arr, sumSearchItem, start = 0, end = null){
    if(end === null) end = arr.length - 1;
    
    if(start >= end) return -1;

    let sumTemp = arr[start] + arr[end];
    if(sumTemp === sumSearchItem) return [start, end];
    else if(sumTemp > sumSearchItem) return findSumIndexRecursive(arr, sumSearchItem, start, end -1);
    else return findSumIndexRecursive(arr, sumSearchItem, start + 1, end);
}

console.log(findSumIndexRecursive(arr, 54));