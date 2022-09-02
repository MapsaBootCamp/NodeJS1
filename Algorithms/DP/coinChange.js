function coinChange(coinsArr, poolDorosht, lengthArr) {

    if(poolDorosht == 0)
        return 1

    if(lengthArr <= 0)
        return 0
    
    if(poolDorosht < 0)
        return 0

    return coinChange(coinsArr, poolDorosht - coinsArr[lengthArr - 1], lengthArr) +
                coinChange(coinsArr, poolDorosht, lengthArr -1)
}


function coinChangeDP(coinsArr, poolDorosht, lengthArr, cache=null) {
    if(cache === null)
        cache = Array(poolDorosht + 1).fill(0).map(() => Array(lengthArr + 1).fill(-1))
    
    if(poolDorosht == 0)
        return 1

    if(lengthArr <= 0)
        return 0
    
    if(poolDorosht < 0)
        return 0

    if(cache[poolDorosht][lengthArr] >= 0)
        return cache[poolDorosht][lengthArr]

    cache[poolDorosht][lengthArr] =  coinChangeDP(coinsArr, poolDorosht - coinsArr[lengthArr - 1], lengthArr, cache) +
                coinChangeDP(coinsArr, poolDorosht, lengthArr -1, cache)
    
    return cache[poolDorosht][lengthArr]

}

console.log(coinChangeDP([2, 3, 5, 6, 21], 100, 5))


// console.log(Array(1000 + 1).fill(0).map(() => Array(11 + 1).fill(-1)))