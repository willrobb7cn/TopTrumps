let user1Cards = []
let user2Cards = []
let winningCard,losingCard


class Card {
    constructor(name, attack, defence, internationalRep, rating, likeability, ) {
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

let Barcelona = new Card("Barcelona", 9, 8, 8, 9, 9);
let Liverpool = new Card("Liverpool", 10, 9, 7, 10, 7);
let ManchesterUnited = new Card("ManchesterUnited", 6, 6, 10, 7, 3);
let HullCity = new Card("HullCity", 3, 3, 1, 3, 6);
let LeedsUnited = new Card("LeedsUnited", 4, 4, 7, 4, 8);
let Spurs = new Card("Spurs", 8, 8, 5, 8, 8);


let cards = [
    Barcelona,
    Liverpool,
    ManchesterUnited,
    HullCity,
    LeedsUnited,
    Spurs
]


// for(i=0;i<cards.length;i++){
// var randomNumber =Math.floor(Math.random()*(cards.length+1))
// }

function distributeCards(cards) { //using a recursion function (function will run until it reaches a return that doesnt return a call to itself)
    var randomNumber = Math.floor(Math.random() * cards.length)
    // console.log(randomNumber);

    if (cards.length == 0) {
        return

    } else if (cards.length % 2 == 0) {
        user1Cards.push(cards[randomNumber])
    } else {
        user2Cards.push(cards[randomNumber])
    }
    cards.splice(randomNumber, 1)
    // console.log(cards.length)
    return distributeCards(cards)
}
// console.log(user1Cards);
// console.log(user2Cards);

// console.log(cards)
function duel(statPlayed) {
    // console.log(user1Cards[0][statPlayed]);
    
    if (user1Cards[0][statPlayed] > user2Cards[0][statPlayed]) {
        user1Cards[0].wins++
        console.log("User 1 Wins\n")
        winningCard = user1Cards.splice(0, 1)
        user1Cards.push(winningCard[0])
        losingCard = user2Cards.splice(0, 1)
        user1Cards.push(losingCard[0])
        console.log(`User 1 now has ${user1Cards.length} cards.\nUser 2 now has ${user2Cards.length} cards`);
        
        
    } else if (user2Cards[0][statPlayed] > user1Cards[0][statPlayed]) {
        user2Cards[0].wins++
        console.log("User 2 Wins\n")
        winningCard = user2Cards.splice(0, 1)
        user2Cards.push(winningCard[0])
        losingCard = user1Cards.splice(0, 1)
        user2Cards.push(losingCard[0])
        console.log(`User 1 now has ${user1Cards.length} cards.\nUser 2 now has ${user2Cards.length} cards`)
        
    } else if (user1Cards[0][statPlayed] == user2Cards[0][statPlayed]) {
        console.log("Its a draw pick a new stat")
        duel()
    }else{
        console.log("Error- fucked it mate")
    }
    
}
function showActiveCard(){
    console.log(user1Cards[0]);
    console.log(user2Cards[0]);
}



distributeCards(cards)
// console.log(user1Cards,user2Cards);

showActiveCard()
duel("defence")//statPlayed)
// attack is a property of the object, not a variable so quotes are needed. so statpalyed is a variable . when i call duel i need "" because i am defining the variable. otherwise its undefined