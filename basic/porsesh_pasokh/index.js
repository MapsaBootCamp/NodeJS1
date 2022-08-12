// const arr = [2, 3, 4]
// arr = [3, 4] ----> error

let name = "Ashkan-Mentor-Node Ashkan kjfkejfke Ashkan" // ------> primitive ---> value
let arr1 = [3, 4, 5, 6] /// ------> refrence type -----> addr
// let arr2 = [arr1]  /// shallow copy
// let arr2 = [...arr1]  /// deep copy
// arr1.push(12)
// console.log(arr2)

// const obj = {
//     name: "Ashkan",
//     age: 12
// }

// const obj2 = {...obj, camp:"Node"};
// obj.pass = 1234
// console.log(obj2)

// console.log(arr1.filter((val, indx) =>  val > 4 ))
// console.log(arr1.every((val) => val > 4))


/// switch/case

const flag = 13

switch (flag) {
    case 12:
        console.log("12 ast")
        break;

    default:
        console.log("default")
        break;
}


const arrSplited = name.split("-");    //// split, join
console.log(arrSplited.join("-"));
console.log(name.indexOf("Ashkan", 38))


