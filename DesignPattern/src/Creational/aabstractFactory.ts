interface GUIFactory{
    createButton(): Button,
    createCheckBox(): CheckBox
}

class WinFactory implements GUIFactory{
    public createButton(): Button {
        return new WinButton();
    }

    public createCheckBox(): CheckBox{
        return new WinCheckBox();
    }
}

class MacFactory implements GUIFactory{
    public createButton(): Button {
        return new MacButton();
    }

    public createCheckBox(): CheckBox{
        return new MacCheckBox();
    }
}


abstract class Button{
    
    public abstract theme(): void;

    public onClick(){
        console.log("on click!")
    }
}

class WinButton extends Button{
    public theme() {
        console.log("button theme baraye windows")
    }
}

class MacButton extends Button{
    public theme() {
        console.log("button theme baraye mac")
    }
}


abstract class CheckBox{

    public abstract tickTheme(): void;

    public onTick(){
        console.log("!tick flag")
    }
}

class WinCheckBox extends CheckBox{
    public tickTheme() {
        console.log("tick them windows")
    }
}

class MacCheckBox extends CheckBox{
    public tickTheme() {
        console.log("tick them mac")
    }
}


class Application{
    private factory: GUIFactory;
    private button: Button;
    private checkBox: CheckBox;

    constructor(f: GUIFactory){
        this.factory = f;
        this.button = f.createButton();
        this.checkBox = f.createCheckBox();
    }

    public createUI(){
        this.button.theme();
        this.checkBox.tickTheme();
    }
}


console.log("create GUI Windows....");
const guiObjWin = new WinFactory()
const appObj1 = new Application(guiObjWin)
appObj1.createUI()

console.log("----------------------------");


console.log("create GUI Mac....");
const guiObjMac = new WinFactory()
const appObj2 = new Application(guiObjMac)
appObj2.createUI()

