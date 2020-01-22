class Card {
    constructor(name, attack, defence, internationalRep, rating, likeability,) {
        this.name = name
        this._attack = attack
        this._defence = defence
        this._internationalRep = internationalRep
        this._rating = rating
        this._likeability = likeability
        this.wins = 0
    }
    name() {
        return this.name
    }
    get attack() {
        return this._attack
    }
    get defence() {
        return this._defence
    }
    get internationalRep() {
        return this._internationalRep
    }
    get rating() {
        return this._rating
    }
    get likeability() {
        return this._likeability
    }
}
let Barcelona = new Card("Barcelona",9, 8, 8, 9, 9);
let Liverpool = new Card("Liverpool",10, 9, 7, 10, 7);
let ManchesterUnited = new Card("ManchesterUnited",6, 6, 10, 7, 3);
let HullCity = new Card("HullCity",3, 3, 1, 3, 6);
let LeedsUnited = new Card("LeedsUnited",4, 4, 7, 4, 8);


let cards = [
    Barcelona,
    Liverpool,
    ManchesterUnited,
    HullCity,
    LeedsUnited
]
console.log(cards)