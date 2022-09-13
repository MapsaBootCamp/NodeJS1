interface Internet{
    operation(country: string): void;
}

class RealInternet implements Internet{
    public operation(country: string): void {
        console.log("be internet ba khubi khoshi vasl shodi!");
    }
}

const blockList = ["USA", "England", "CANADA"]


class InternetProxy implements Internet{
    private realService: RealInternet;

    constructor(s: RealInternet){
        this.realService = s;
    }

    checkAccess(country: string): boolean{
        if(blockList.includes(country)) return false;
        return true;
    }

    public operation(country: string): void {
        if(this.checkAccess(country)) this.realService.operation(country)
        else console.log("mojaz nisti");
    }
}


class InternetClient{
    private internet: Internet;

    constructor(s: Internet){
        this.internet = s;
    }

    public internetConnection(country: string): void{
        this.internet.operation(country);
    }
}

const realObj = new RealInternet()
const internetObj = new InternetProxy(realObj)
const clientObj = new InternetClient(internetObj)
clientObj.internetConnection("IRAN")