// comment

/*
fleihwgleiwhgliewhg
elihgliewhgew
*/

// const number = 13

// for(let i = 1; i < number; i++){
//     if(number%i == 0){
//         console.log(i);
//     }
// }

// let i = 1
// while(i < number){
//     if (number % i == 0) {
//         console.log(i);
//     }
//     i++;
// }



// for(let i = 1; i <= number; i++)
//     (number % i) ? null : console.log(i);



// let age = 12

// let mojaz;

// mojaz = age > 18 ? "mojaz nist" : "mojaz ast"

// console.log(-6 >>> 32)

// if(age > 18 && age < 13){
//     console.log("salam");
// }

// console.log(mojaz);


// console.log("a" !== "b")

// console.log(age % 5);

// console.log(typeof false);

// age = "Ashkan Divband"

// console.log(typeof age);

///// Map

const myMap = new Map(
    [
        ["name", "ashkan"],
        ["age", 22],
        [20, "a"],
        [["a", "b"],  2]
    ]
)

// console.log(myMap);

///// Object


const myObject = {
    name : "ashkan",
    lastName: "Divband",
    age: 20,
    stack : {
        lang: "javascript",
        scope: ["react", "express"]
    },
    fulname: function(){
        return this.name + " " + this.lastName
    }
}

// console.log(myObject);


//// loops in javascripts

// for(let i=0; i< 10 ; i+=2){
//     if(i===8)
//         break
//         // continue
//     console.log(i)
// }




// const myArray = [1, 2, 3, 4, 5]
// console.log("length myArray", myArray.length);
/// for in ====> Array, Object
//// Array ---> index
//// Object ----> key
for(index in myObject){
    if(index === "stack"){
        // console.log(myObject[index]["scope"]);
    }
}



/// for of --- Array, Map

// for(const value of myMap){
//     console.log(value);
// }


// myArray.forEach((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })



///// map, reduce, filter

// newArray = myArray.map((value) => 2 * value)
// filterdArray = myArray.filter((value) => (value%2 === 0))
// reducedVal = myArray.reduce((prevVal, currVal, currIndx, khodeArr) => {
//                                     console.log(prevVal);
//                                     console.log(currVal);
//                                     console.log(currIndx);
//                                     console.log(khodeArr);
//                                     return prevVal + currVal}, 0)

// console.log(reducedVal);




///// Array methods => toString, join, shift, unshift, splice, slice, sort, every

const myArray = [1, 2, 3, 4, -1, 3,  9, 5]
const myArray2 = ["tehran", "mapsa", "barun" , "ashkan"]

// console.log(myArray.toString());
// console.log(myArray.join("+++"));
// console.log(myArray.unshift(10, 12));
// console.log(myArray);
// console.log(myArray.concat(myArray2));
// console.log(myArray + myArray2);
// let a = myArray.slice(2, 4)
// console.log(a);
// console.log(myArray);


// console.log(myArray2.sort((a, b) => {
//     console.log("a: ", a, "----", "b: ", b);
//     if(a[0] > b[0])
//         return -1
//     else if((a[0] < b[0]))
//         return +1
//     else
//         return 0

// })); /// descending


// console.log(myArray.every((value) => value > -2));
// console.log(myArray.some((value) => value > 17));
// console.log(myArray.indexOf(3, 3));
console.log(myArray.find((val) => val > 8));



/////// functions


// function maghsomha(num){
//     const result = []

//     for(let i = 1; i <= num/2; i++)
//         num%i === 0 && result.push(i)
//     result.push(num);
//     return result;
// }


const maghsomha = (num, age) => {
    const result = []
    for(let i = 1; i <= num/2; i++)
        num%i === 0 && result.push(i)
    result.push(num);
    num++;
    return result;
}


function isPrime(num){
    if(num < 2)
        throw "number bayad bozorgtar mosavi 2 bashad"
    
    for(let i=2; i <= Math.sqrt(num) ; i++)
        if(num%i === 0)
            return false
    return true
}

function gcd(num1, num2){

    const smallets = num1 > num2 ? num2 : num1
    for(let i=smallets; i > 0; i--){
        if((num1%i===0 ) && (num2%i===0))
            return i
    }
}


function gcd2(num1, num2){

    let [min, max] = num1 > num2 ? [num2, num1] : [num1, num2]

    while( min > 0){
        [min, max] = [max%min, min]
    }
    return max
}

// console.log(gcd2(12, 8));








////////////// Matrix Multiplication

arr1 = [
    [1, 2],
    [3, 4]
]

arr2 = [
    [1, 2, 3],
    [4, 5, 6]
]


// console.log(arr2[0].length);






