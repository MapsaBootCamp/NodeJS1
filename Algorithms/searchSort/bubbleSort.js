const arr = [2, 3, 4, -1, 12, 8]

const bubbleSort = (arr) => {

    arr = [...arr];

    for(let i=0; i < arr.length; i++){        
        swapFlag = false;
        for(let j=0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                    swapFlag = true;
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                }    
        }
        if(!swapFlag) return arr;
    }
    
    return arr  
}

console.log(bubbleSort(arr));
console.log(arr);


// const range = (start, stop, step=1) => 
//      Array.from({length: (stop - 1 - start)/step + 1}, 
//                                 (_, k) => start + step * k)

