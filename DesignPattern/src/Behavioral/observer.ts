class Publisher{
    private subscribers: Subscriber[] = [];

    public subscriber(s: Subscriber): void{
        this.subscribers.push(s);
    }

    public unSubscribe(s: Subscriber): void{
        const indexSub = this.subscribers.indexOf(s);
        if(indexSub !== -1) this.subscribers.splice(indexSub, 1)
    }

    public showAllSubscribers(): void{
        for(const elem of this.subscribers){
            console.log("subscribers name: ", elem.name);
            
        }
    }

    public notify(event: string): void{
        for(const elem of this.subscribers){
            elem.update(event);
        }
    }
}

interface Subscriber{
    name: string,
    update(contex: string): void;
}


class RadioSubscriber  implements Subscriber{
    public name: string;

    constructor(){
        this.name = "Radio"
    }

    public update(contex: string): void{
        console.log(`${this.name} hastam va khabar ${contex} gozaresh mishe`)
    }
}

class TVSubscriber  implements Subscriber{
    public name: string;

    constructor(){
        this.name = "TV"
    }

    public update(contex: string): void{
        console.log(`${this.name} hastam va khabar ${contex} gozaresh mishe`)
    }
    
} 

class WebSubscriber  implements Subscriber{
    public name: string;

    constructor(){
        this.name = "Web"
    }

    public update(contex: string): void{
        console.log(`${this.name} hastam va khabar ${contex} gozaresh mishe`)
    }
} 

const footballPublisher = new Publisher();
const radio = new RadioSubscriber();
const tv = new TVSubscriber();
const web = new WebSubscriber();


footballPublisher.subscriber(radio);
footballPublisher.subscriber(tv);
footballPublisher.subscriber(web);

footballPublisher.notify("Goal");

footballPublisher.unSubscribe(tv);

footballPublisher.notify("Faul");