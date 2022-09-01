const arr = [2, 3, 4, -1, 12, 8, 8]

// const quickSort = (arr) => {
//     if(arr.length < 2) return arr;
//     const pivotIndex = arr.length - 1;
//     const pivot = arr[pivotIndex];

//     const left = [];
//     const right = [];
//     arr.forEach((val, index)=> {
//         if(val >= pivot && index != pivotIndex) right.push(val)
//         else if(val < pivot) left.push(val)
//     })

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }


const quickSort = (arr) => {
    if(arr.length < 2) return arr;
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex];

    const [left, right] = arr.reduce((acc, val, index) => {
        if(val >= pivot && index != pivotIndex) acc[1].push(val)
        else if(val < pivot) acc[0].push(val)
        return acc;
    }, [[], []])

    return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort(arr));