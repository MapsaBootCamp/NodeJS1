class Rectangle {
    static counter = 0;
    #height;
    #width;

    constructor(height, width) {
      this.#height = height;
      this.#width = width;
      Rectangle.counter++;
    }
    
    get height() {
        console.log("getter");
        return this.#height;
    }

    set height(height) {
        console.log("setter");
        this.#height = height;
    }

    static numberOfObjects(){
        return Rectangle.counter;
    }

    #masahat(){
        return this.#height * this.#width;
    }

    getMasahat(){
        return this.#masahat();
    }

}


class Squire extends Rectangle {
    constructor(height, width, ghotr){
        if(height !== width) throw "bayad tool va arz yeksan bashe."
        super(height, width);
        this._ghotr = ghotr;
    }

    

    dispaly(){
        return "morabai ba masahat " + this.getMasahat();
    }
}






// function *getList(){
//     console.log("vorud");
//     for(let i=0 ; i < 10; i++)
//         yield i;  
// }

// for(let elm of getList()){
//     console.log(elm);
// }

const recObj = new Rectangle(12, 18)
const sqrObj = new Squire(12, 12)

// console.log(sqrObj.dispaly());


//////////////////// mixin with assign
class Test {
    constructor() {
      this.var1 = 'var1'
    }
    method1() {
      console.log(this.var1)
    }
    test() {
      console.log(this.name);
      this.method2()
    }
}

let name = "AS"

var mixin = {
    var2: 'var2',
    method2: function(){
      console.log(this.var2)
    }
}


Object.assign(Test.prototype, mixin)
// const t1 = new Test();
// t1.test()


//////////////////// mixin with assign
let ClassA = (superclass) => class extends superclass{
    foo(){
        console.log("sallllllam az foo!");
    }
}

class BaseClass{
    bar(){
        console.log("sallllllam az bar!");
    }
}

class classB extends ClassA(Object){

}
const obj1 = new classB()
// obj2.foo()
obj1.foo()


let TestMixiend = (superclass) => class extends superclass{
    
    constructor(){
        super();
        this.var2 = 'var2'
    }

    method2(){
      console.log(this.var2)
    }
}

class TestWithMyMixin extends TestMixiend(Test){
    
}

const obj = new TestWithMyMixin();
obj.method2()


class A{
    salam(){
        console.log("Salam A")
    }
}

class B extends A{
    salam(){
        super.salam()
        console.log("Salam B")
    }
}

class C extends B{
    salam(){
        super.salam()
    }
}

const objC = new C()
