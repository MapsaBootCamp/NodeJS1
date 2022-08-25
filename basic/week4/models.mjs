class BaseProductModel{
     
    constructor(name, price, category){
        this._id = BaseProductModel.idGenerator()
        this.name = name
        this.price = price
        this.category = category
        this.comments = []
    }

    get id(){
        return this._id;
    }

    static idGenerator(){
            let result;
            do{ 
                result = Math.floor(Math.random() * 1e5)
            } while(result < 1e4 - 1)
        return result
    }

    addComment(comment){
        this.comments.push(comment)
    }
}


class Pushaak extends BaseProductModel{
    constructor(name, price, gender, colour, brand){
        super(name, price, "pushaak");
        this.gender = gender;
        this.colour = colour;
        this.brand = brand;
    }
}


class LavazemBarghi extends BaseProductModel{
    constructor(name, price, power){
        super(name, price, "lavazemBarghi");
        this.power = power;
    }
}


class User{

    constructor(username){
        this.username = username;
        this.purchaseHistory = []
    }

    addToCart(product){
        this.purchaseHistory.push(product.id)
    }
}


class Comment{
    
    constructor(user, rating, text){
        this.user = user
        this.rating = rating
        this.text = text
    }
}

export {
    Pushaak,
    LavazemBarghi,
    User,
    Comment
}