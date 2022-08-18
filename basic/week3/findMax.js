function findMax(...args){
    return args.sort().reverse().join("")
}


console.log(findMax(2, 12, 22, 23, 9, 112, 78));