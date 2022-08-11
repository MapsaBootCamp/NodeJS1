///// OOP kheili sadeh

const userCreator = function (userName, password, age) {
    return {
        userName,
        password,
        age,
        authentication: function () {
            //// body
        }
    }
}

// console.log(userCreator("Ashkan", "1234", 23));

const UserCreator = function (userName, password, age) {
    console.log("ghabl", this);
    this.userName = userName;
    this.password = password;
    this.age = age
    console.log("enteha", this);
}


// const user = new UserCreator("Ashkan", "1234", 23)
// console.log(user);


///// closure

function salamKardan(name){
    
    const matnTashakor = "merc az shoma"
    if(name === "Ashkan"){       
        return function ahvalporsiAshkan(age) {
            console.log(`salam ${name}. ${matnTashakor}. che bozorg shodi. aghaye ${age} sale.`);
        }
    }else{
        return function ahvalporsi() {
            console.log(`salam ${name}`);
        }
    }
}

// salamKardan("Ashkan")(12)
// salamKardan("Mammad")


const counter = (function (parameter) {
    let privateCounter = 0;
    let publicValue = parameter;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
      publicValue
    };
  })(12);
  
//   console.log(counter.value()); // 0.
  
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2.
  
//   counter.decrement();
//   console.log(counter.value()); // 1.

//   console.log(counter);
  
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

// console.log(sum(1)(2)(3)(4)); // log 20

///// 1, 1, 2, 3, 5, 8



function fibo(indx){
    let first = 1;
    let second = 1;

    for(let i=1; i<indx; i++){
        [first, second] = [second, first + second];
    }

    return first;
}


// console.log(fibo(500));


function fiboV2(indx) {
    if(indx === 1 || indx === 2)
        return 1
    
    return fiboV2(indx - 1) + fiboV2(indx - 2)
    
}


// console.log(fiboV2(50));

function fiboV3(indx, cache = [0, 1, 1]) {

    if(indx === 1 || indx === 2 || cache[indx])
        return cache[indx]

    cache[indx] = fiboV3(indx - 1, cache) + fiboV3(indx - 2, cache)
    return cache[indx]
    
}

console.log(fiboV3(8));
