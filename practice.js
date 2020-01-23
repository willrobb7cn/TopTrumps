let user1cards = [0,1,2,3]
let user2cards = [5,6,7,8]

let winningCard,losingCard


winningCard = user1cards.splice(0,1)
user1cards.push(winningCard[0])
losingCard = user2cards.splice(0,1)
user1cards.push(losingCard[0])


console.log(losingCard);
console.log(winningCard);
console.log(user1cards,user2cards);


winningCard = user1cards.splice(0,1)
user1cards.push(winningCard[0])
losingCard = user2cards.splice(0,1)
user1cards.push(losingCard[0])


console.log(user1cards,user2cards);

function ammendDeck(){
    if user1
}