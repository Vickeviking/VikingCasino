//black jack code
let player= {
    name: "",
    chips: 100
}
 
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let dead = false;
let message = "";
let clickMessage;
let clickMessageEl = document.getElementById("clickMessage-el");
let sumEl = document.querySelector("#sum-el");
let messageEL = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let stoppa = false;

 
 
 
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


    clickMessageEl.textContent = "Start"


 
function startGame(){
    if(player.chips > 0){
        player.chips = player.chips - 5;
    }
        skickaVidare();

}

function skickaVidare(){
    cards = [];
    hasBlackJack = false;
    dead = false;
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]; //ordered list of items
    sum = firstCard + secondCard;
    renderGame();

}

function renderGame(){
    playerEl.textContent = player.name + ": $" + player.chips;
    cardsEl.textContent = "Cards: "
 
    for(let i = 0; i < cards.length; i++ ){
 
        cardsEl.textContent += cards[i] + " ";
    }
 
 
    sumEl.textContent = "Sum: " + sum;
 
        if(sum <= 20)
    {
        message = "Would you like to draw again?";
    }else if(sum === 21)
    {
        message = "You've got Black Jack!";
        hasBlackJack = true;
        isAlive = false;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEL.textContent = message;

}
 
function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {
 
        let card = getRandomCard();
        sum += card;
   
        cards.push(card);
   
        renderGame();
    }
 
 
}

function stoppar()
{
    console.log("Stannar");
 
}



 
function getRandomCard()
{
    let randomNumber =  Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1){
            return 11;
    } else {
        return randomNumber;
    }
}
