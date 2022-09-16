import { userObj } from "./userModel/user";
console.log(userObj);


//// Array type
const myUsers: number[] = [123, 32];


//// Tuple
const userInfo: [string, string, number] = ["username", "pass", 123]

/// inference type
let name = "Ashkan";

//// function
// function mySum(numLst: number[], prefixResult: string): string {
//     let result: number;
//     result = numLst.reduce((acc, val) => acc + val, 0);
//     return prefixResult.toUpperCase() + " " + result    
// }

// console.log(mySum([1, 2, 3, 4, 4], "Jam Mishe:"))


/// Union type
let mammad: string | number | number[];
mammad = "A";
mammad = 124;
mammad = [23, 4];
// mammad = true; ///error


//// Object
const camp: {
    name: string,
    status: string,
    students?: string[]
} = {
    name: "NodeJS",
    status: "Active",
    students: ["Mahdi"],
}

camp.students?.push("Elham")

//// Enum

enum WeekDays {SUT, SUN=12, MON}

console.log(WeekDays.SUT);

//// type aliasing

type combinedType = number | string;

// type Point = {
//     x: number;
//     y: number;
//   };
   
//   // Exactly the same as the earlier example
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
   
//   printCoord({ x: 100, y: 100 });


//// literal
  type Role = "Admin" | "User";

  function accessType(username: string, role: Role) {
        if(role === "Admin")
            console.log("admin access")
        else
            console.log("user access");                
  }

// accessType("Ashkan", "Admin")


////// Interface Type

interface Point {
    x: number;
    y: number;
  }

interface Point {
    colored: boolean
}

interface Point3D extends Point {
    z : number
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
   
// printCoord({ x: 100, y: 1100, colored: true});


///// strictNullCheck

function salam(user?: string | undefined) {
    if(user === undefined)
        console.log("salam be hichki");
    else
        console.log(`salam ${user.toUpperCase()}`);
    
}

// salam()



////// class

abstract class Animal {
    // static count: number = 0;
    name: string;
    age: number;

    public abstract voice();

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    private animalInfo(): string{
        return `name: ${this.name} + age: ${this.age}`
    }

}


class Dog extends Animal{
    voice() {
        console.log("vagh vagh");
        
    }
}

const aObj = new Dog("Dog", 12)
aObj.voice()

////// Interface implementation

interface A{
    salamKardan: (name: string) => string
}

interface C{
    salamKardanC: (name: string) => string
}

class B implements A, C{
    private name: string;

    constructor(name){
        this.name = name;
    }

    salamKardan():string {
       return `salam ${this.name}` 
    }

    salamKardanC(){
        return "salam C"
    }
}

const myObj = new B("Ashkan");
console.log(myObj.salamKardan())


const testMap = new Map()
testMap.set("a", "abc")
console.log(testMap);
