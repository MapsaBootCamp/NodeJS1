let first = 1;
let second = 1;
let index = 5

for(let i=0; i < index; i++)
    [first, second] = [second, first + second]

console.log(first)