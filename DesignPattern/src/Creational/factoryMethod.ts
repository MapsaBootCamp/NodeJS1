abstract class Logistic{

    public abstract factoryMethod(): Product;

    public someOperation(): string{
        const product = this.factoryMethod();
        return `kala ro gereftam va ${product.doStuff()} `
    }
}


class LogisticSea extends Logistic{
    public factoryMethod(): Product {
        return new Ship();
    }
}

class LogisticRoad extends Logistic{
    public factoryMethod(): Product {
        return new Truck();
    }
}


interface Product{
    doStuff(): string;
}


class Ship implements Product{
    doStuff(): string {
        return 'haml kala dar darya!'
    }
}

class Truck implements Product{
    doStuff(): string {
        return 'haml kala dar Jadeh!'
    }
}

function client(logistic: Logistic){
    console.log("tahvil kala...");
    console.log(logistic.someOperation());
}

console.log("masir Abi");
const logObj1 = new LogisticSea();
client(logObj1);

console.log("masir Zamini");
const logObj2 = new LogisticRoad();
client(logObj2);
