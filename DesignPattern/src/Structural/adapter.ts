class Target{

    public request():string {
        return "2 shakheh irani"
    }
}

class Adapter extends Target{
    private adaptee: Adaptee;

    constructor(){
        super();
        this.adaptee = new Adaptee()
    }

    public request(): string{
        const data = this.adaptee.specificRequest();
        console.log(`${data} be 2tai tabdil she`);
        return "2 shakheh irani"
    }
}

class Adaptee{
    public specificRequest(): string{
        return "man 3shkhe chini hastam";
    }
}

function clientAdapter(target: Target) {
    console.log(target.request())
}

console.log("Start program....");
const adapter = new Adapter()
clientAdapter(adapter)
