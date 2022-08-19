////////////////////////// entries ---> keys, values
const getObjectKeys = {
    getObjectKeys: function(){
        return Object.entries(this).map((val) => val[0]);
    }  
}
function getObjectsValue(obj) {
    return Object.entries(obj).map((val) => val[1]);
}
const userObj = {a: 1, b: 2}
console.log(getObjectKeys.getObjectKeys.call(userObj))


////////////////////////////prototype
// Object.prototype.getObjectKeys = function (){
//     return Object.entries(this).map((val) => val[0]);
// }

Date.prototype.zamanShamsi = function(){

}


// console.log(userObj.getObjectKeys())


const personInfo = {
    active: false,
    information : function(age){
        return this.firstname + " " + this.lastname + " senesh: "+ age; 
    }
}

const person1 = {
    firstname : "Ashkan",
    lastname : "Teghfo"
}

console.log(personInfo.information.apply(person1, [18]));
console.log(personInfo.information());