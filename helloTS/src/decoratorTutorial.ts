///////////////////////   Decorators


/**

            Decorators are a way to decorate members of a class, 
            or a class itself, with extra functionality. 
            When you apply a decorator to a class or a class member, 
            you are actually calling a function that is going to receive 
            details of what is being decorated, 
            and the decorator implementation will then be able to transform 
            the code dynamically, adding extra functionality, 
            and reducing boilerplate code. 
            They are a way to have metaprogramming in TypeScript, 
            which is a programming technique that enables the programmer 
            to create code that uses other code from the application itself as data.


            NOTE: Decorators are a stage 2 proposal for JavaScript and are available 
            as an experimental feature of TypeScript.

            A Decorator is a special kind of declaration that can be attached to a class declaration, 
            method, accessor, property, or parameter. 
            Decorators use the form @expression, where expression must evaluate to a function 
            that will be called at runtime with information about the decorated declaration.



            @classDecorator
            class Person {

                    @propertyDecorator
                    public name: string;

                    @accessorDecorator
                    get fullName() {
                        // ...
                    }

                    @methodDecorator
                    printName(@parameterDecorator prefix: string) {
                        // ...
                    }
            }

*/


////////////////////////////////// class decorator

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
      name = "Asghar";
    };
  }

@reportableClassDecorator
class User {
    reportingURL: any;
    constructor(public name: string) {}
}

@reportableClassDecorator
class City {
    constructor(public zicode: number) {}
}
  
  let user = new User("dany");
  let ny = new City(12);
  //City and User classes has the id and created property ;)
  console.log(user.name);



////// property decorator


// const printMemberName = (target: any, memberName: string) => {
//     console.log(memberName);
//     console.log(target[memberName]);
    
//   };
  
// class Person {
//     // @printMemberName
//     aaa: string = "john";

// }


