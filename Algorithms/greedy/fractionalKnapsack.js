const itemsValueWeight = [[2, 8], [2, 8], [7, 12], [4, 2]];


function fractionalKnap(capacity, items) {
    const itemsWithDensity = new Map();
    for(let elm of items){
        itemsWithDensity.set(elm, elm[0]/elm[1]);
    }
    const sortedItems = new Map([...itemsWithDensity].sort((a, b) => b[1] - a[1]));
    const result = new Map();
    let maxValue = 0;

    for(let [item, _] of sortedItems){
        if(capacity >= item[1]) {
            result.set(item, 1);
            maxValue += item[0];
            capacity -= item[1];
        }else if(capacity > 0){
            let fraction = capacity / item[1];
            result.set(item, fraction);
            maxValue += (fraction * item[0]);
            capacity = 0;
            break;
        }
    }
    console.log(maxValue);
    return result;
}

console.log(fractionalKnap(50, itemsValueWeight))