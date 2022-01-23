//const { update } = require("../../models/User");

//black jack code
let player = {
  name: "",
  chips: 100,
};


//connect to mongus

let cards = [];
let dealerCards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let dead = false;
let message = "";
let clickMessage;
let clickMessageEl = document.getElementById("clickMessage-el");
let winMessage;
let winMessageEl = document.getElementById("winMessage-el");
let sumEl = document.querySelector("#sum-el");
let messageEL = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let dealerCardsEl = document.getElementById("dealerCards-el");
let stoppa = false;
let cardSet = false;
let firstDCard = 0;
let secondDCard = 0;
let over17 = false;
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

clickMessageEl.textContent = "Start";

function startGame() {
  if (stoppa == false) {
    
    winMessageEl.textContent = "";
    dealerCardsEl.textContent = "DealerCards: " + dealerCards;
    
    skickaVidare();
  }
}
  function skickaVidare() {
    cards = [];
    hasBlackJack = false;
    dead = false;
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
   firstDCard = getRandomCard();
   secondDCard = getRandomCard();
    cards = [firstCard, secondCard]; //ordered list of items
    sum = firstCard + secondCard;
    renderGame();
  }


function renderGame() {
  playerEl.textContent = player.name + ": $" + player.chips;
  cardsEl.textContent = "Cards: ";
  dealerCardsEl.textContent = "DealerCards: " + firstDCard + " ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Would you like to draw again?";
  } else if (sum === 21) {
    message = "You've got Black Jack!";
    hasBlackJack = true;
    isAlive = false;

    winMessageEl.textContent = "Nice you won 20$"

    player.chips = player.chips + 20;
    
playerEl.textContent = player.name + ": $" + player.chips;

  } else {
    message = "You're out of the game";
    isAlive = false;
    if (player.chips > 0) {
      player.chips = player.chips - 10;
    }
    
    winMessageEl.textContent = "You lost 10$"
    playerEl.textContent = player.name + ": $" + player.chips;


  }
  messageEL.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false && stoppa === false) {
    let card = getRandomCard();
    sum += card;

    cards.push(card);

    renderGame();
  }
}

function stoppar() {
  stoppa = true;
  dealerGive();
}

function dealerGive() {
  dealerCards = [];

  if(cardSet == false){
  dealerSum = firstDCard + secondDCard;
}
console.log(dealerSum);
 cardSet = true;

  dealerCards = [firstDCard, secondDCard];
  dealerCardsEl.textContent = "DealerCards: " + dealerSum;
 /* for (let i = 0; i < dealerCards.length; i++) {
    dealerCardsEl.textContent += dealerCards[i] + " ";
  }*/

  if(dealerSum < 17){
      dealerGiveAnother();
  } else{
      dealerDone();
  }
  
}

function dealerGiveAnother()
{
    console.log("dealer wants new card");
    let newDealerCard = getRandomCard();
    console.log(newDealerCard);
    dealerCards.push(newDealerCard);
    console.log(dealerCards);
dealerSum = dealerSum + newDealerCard;
    dealerGive();

    /*dealerSum = newDealerCard + dealerSum;

    dealerCards.push(newDealerCard);

    dealerGive();*/


}

function dealerDone()
{
    console.log("färdig");
    
    console.log(dealerSum);
    
    console.log(sum);


    if(dealerSum > sum && dealerSum < 22 ){

      winMessageEl.textContent = "You lost 10$";
      console.log("loss");
      if (player.chips > 0) {
        player.chips = player.chips - 10;
      }
    cardSet = false;
    isAlive = false;
    stoppa = false;
    cards = [];
    dealerCards = [];
    playerEl.textContent = player.name + ": $" + player.chips;
    }

    if(dealerSum < sum && sum < 22)
    {
    winMessageEl.textContent = "Nice you won 10$"
    console.log("win");
    player.chips = player.chips + 10;
    cardSet = false;
    isAlive = false;
    stoppa = false;
    cards = [];
    dealerCards = [];
    playerEl.textContent = player.name + ": $" + player.chips;

    }

    if(dealerSum > 21 && sum < 22)
    {
    winMessageEl.textContent = "Nice you won 10$"
    console.log("win");
    player.chips = player.chips + 10;
    cardSet = false;
    isAlive = false;
    stoppa = false;
    cards = [];
    dealerCards = [];
    playerEl.textContent = player.name + ": $" + player.chips;

    }

    if(dealerSum === sum)
    {
    winMessageEl.textContent = "It's a draw"
    console.log("win");
    cardSet = false;
    isAlive = false;
    stoppa = false;
    cards = [];
    dealerCards = [];
    playerEl.textContent = player.name + ": $" + player.chips;

    }
}





function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}



