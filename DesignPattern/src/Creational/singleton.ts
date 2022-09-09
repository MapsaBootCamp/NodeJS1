class Singlton {
    private static instance: Singlton;

    private constructor(){};

    public static getInstance(): Singlton{
        if(!Singlton.instance){
            Singlton.instance = new Singlton();
        }
        return Singlton.instance;
    }
}


const s1 = Singlton.getInstance();
const s2 = Singlton.getInstance();


if(s1 === s2)
    console.log("s1 is s2");
else  
    console.log("hichi")
    