const currency = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

// [1, 2, 5, 7, 9, 10] -----> 14, 10+2+2, 9+5

function findCoins(poolDorosht){
    const result = new Map();
    for(let i = currency.length -1 ; i >= 0 ; i--){
        let tempCount = 0;
        while(poolDorosht >= currency[i]){
            poolDorosht -= currency[i];
            tempCount++;
        }
        result.set(currency[i], tempCount)
    }
    return result;
}

function findCoinWithDevision(poolDorosht) {
    const result = new Map();
    for(let i = currency.length - 1 ; i >= 0 ; i--){
        let tempCount = Math.floor(poolDorosht/currency[i]);
        poolDorosht = poolDorosht % currency[i]; 
        result.set(currency[i], tempCount)
    }
    return result; 
}

console.log(findCoinWithDevision(12351))