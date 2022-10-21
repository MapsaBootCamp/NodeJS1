///////////// class decorator

function sealed(target: Function){
    Object.seal(target)
    Object.seal(target.prototype)
}

function decoratorFactory(flag: boolean) {
    console.log("flag: ", flag);
    return function (target: any) {
      console.log("first(): called");
    };
}

@decoratorFactory(true)
class A{
    static testData? = 12;
    constructor(public nameProp?: string){}
}

// console.log(Object.isSealed(obj));



////// property decorator


const printMemberName = (target: any, memberName: string) => {
    console.log(memberName);
    console.log(target[memberName]);
    
  };
  
class Person {
    // @printMemberName
    aaa: string = "john";

}



console.log(Person.aaa)

