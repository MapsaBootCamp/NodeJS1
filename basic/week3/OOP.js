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

console.log(sqrObj.dispaly());