let user1Cards = []
let user2Cards = []
let winningCard,losingCard
let card1 = document.getElementById('card-1')
let card2 = document.getElementById('card-2')


class Card {
    constructor(name, attack, defence, rating ) {
        this.name = name
        this._attack = attack
        this._defence = defence
        this._rating = rating
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
    get rating() {
        return this._rating
    }
    
}

// let Barcelona = new Card("Barcelona", 9, 8, 8, 9, 9);
// let Liverpool = new Card("Liverpool", 10, 9, 7, 10, 7);
// let HullCity = new Card("HullCity", 3, 3, 1, 3, 6);
// let LeedsUnited = new Card("LeedsUnited", 4, 4, 7, 4, 8);
// let Spurs = new Card("Spurs", 8, 8, 5, 8, 8);
let Arsenal = new Card("Arsenal", 8,5,7);
let Bournemouth = new Card("Bournemouth", 6, 6, 7);
let Chelsea = new Card("Chelsea", 7, 7, 8);
let ManchesterUnited = new Card("ManchesterUnited", 7, 7, 7);
let ACMilan = new Card("ACMilan", 5,5 ,7 );
let  Athletico = new Card("Athletico",8 ,8 ,8 );
let  Barnsley = new Card("Barnsley",3 ,3,3 );
let  Bayern= new Card("Bayern", 9,6 ,8 );
let  Blackburn= new Card("Blackburn",2 ,3 ,5 );
let  Brighton= new Card("Brighton", 6, 4, 5);
let BVB = new Card("BVB",8 ,6 ,8 );
let  CrytalPalace= new Card("CrytalPalace",8 ,4 ,6 );
let  Everton= new Card("Everton",6 ,7 ,6 );
let  LA= new Card("LA", 6, 5, 6);
let  Leeds= new Card("Leeds", 10, 10, 10);
let  Leicester= new Card("Leicester",8 ,7 ,7 );
let  Liverpool= new Card("Liverpool",10 ,10 ,10 );
let  Middlesbrough= new Card("Middlesbrough", 4, 3, 4);
let  Napoli= new Card("Napoli",9 ,6 ,7 );
let  PSG= new Card("PSG",9 ,7 ,8 );
let  RealMadrid= new Card("RealMadrid",8 ,9 ,9 );
let  Roma= new Card("Roma",6 ,5 ,6 );
let  SheffUnited= new Card("SheffUnited", 6, 5, 7);
let  Southhampton= new Card("Southhampton", 6, 6, 6);
let  Sporting= new Card("Sporting",7 ,6 ,6 );
let  Spurs= new Card("Spurs", 8, 7, 8);
let  Stoke= new Card("Stoke",5 ,4 ,5 );
let  Sunderland= new Card("Sunderland",3 ,2 ,3 );
let  Watford= new Card("Watford",5 ,4 ,5 );
let  WestHam= new Card("WestHam",7 ,4 ,6 );


let cards = [
Arsenal,
Bournemouth,
Chelsea,
Roma,
RealMadrid,
Liverpool,
Southhampton,
ACMilan,
WestHam,
Brighton,
BVB,
Barnsley,
Stoke,
Blackburn,
Sunderland,
PSG,
Bayern,
Leicester,
Middlesbrough,
Sporting,
CrytalPalace,
SheffUnited,
Everton,
Spurs,
LA,
Athletico,
Napoli,
Leeds,
ManchesterUnited,
Watford
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
resultsp = document.getElementById("resultsp")
// console.log(user2Cards);



function checkWin(){
    if (user1Cards.length == 0 ||user2Cards.length == 0){
        results.innerText = "\nTHE GAME IS OVER"
        input.selectedIndex = 0
        card1.style.display = "none"
        card2.style.display = "none"
        return true
    }else{

        return false
    }
}



// console.log(cards)
function duel(statPlayed) {
    // console.log(user1Cards[0][statPlayed]);
    
    if (user1Cards[0][statPlayed] > user2Cards[0][statPlayed]) {
        user1Cards[0].wins++
        console.log("User 1 Wins\n")
        alert("User 1 wins")
        results.innerText = "\nUser 1 won the last round"
        winningCard = user1Cards.splice(0, 1)
        user1Cards.push(winningCard[0])
        losingCard = user2Cards.splice(0, 1)
        user1Cards.push(losingCard[0])
        cardsInDeck1.innerText = `${user1Cards.length} Cards in deck`
        cardsInDeck2.innerText = `${user2Cards.length} Cards in deck`
        console.log(`User 1 now has ${user1Cards.length} cards.\nUser 2 now has ${user2Cards.length} cards`);
        
        
    } else if (user2Cards[0][statPlayed] > user1Cards[0][statPlayed]) {
        user2Cards[0].wins++
        console.log("User 2 Wins\n")
        alert("User 2 wins")
        results.innerText = "\nUser 2 won the last round"
        winningCard = user2Cards.splice(0, 1)
        user2Cards.push(winningCard[0])
        losingCard = user1Cards.splice(0, 1)
        user2Cards.push(losingCard[0])
        cardsInDeck1.innerText = `${user1Cards.length} Cards in deck`
        cardsInDeck2.innerText = `${user2Cards.length} Cards in deck`
        console.log(`User 1 now has ${user1Cards.length} cards.\nUser 2 now has ${user2Cards.length} cards`)
        
    } else if (user1Cards[0][statPlayed] == user2Cards[0][statPlayed]) {
        console.log("Its a draw pick a new stat")
        
    }else{
        console.log("Error- fucked it mate")
    }
    
}
// let card1 = document.getElementById('card-1')
// let card2 = document.getElementById('card-2')
function showActiveCard(){
    console.log(user1Cards.length);
    console.log(user2Cards.length);
    card1.style.display = 'block';
    card2.style.display = 'block';
	card1.src =  `/img/${user1Cards[0].name}.PNG`;
	card2.src =  `/img/${user2Cards[0].name}.PNG`;
	
}

function init(){
    card1.style.display = 'none';
    card2.style.display = 'none';
    distributeCards(cards)
    showActiveCard()
}
let input = document.getElementById("statSelect")
let start = document.getElementById("startGame")

start.addEventListener("click",()=>{
    init()
})


input.addEventListener("input",()=>{
    // duel(Element.)
    if (input.selectedIndex == -1)
        return null;

    duel(input.options[input.selectedIndex].text);
    if(checkWin()){
        return
    }else{
    showActiveCard()
    input.selectedIndex = 0
}})


// distributeCards(cards)
// console.log(user1Cards,user2Cards);

// showActiveCard()
// duel("attack")//statPlayed)
// attack is a property of the object, not a variable so quotes are needed. so statpalyed is a variable . when i call duel i need "" because i am defining the variable. otherwise its undefined