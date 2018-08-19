let emptyBoard = []
let card =
let pairFound =
let m
let i

// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

function emptySquares () {
  const square = $('.square')
  for (let m = 0; m < square.length; m++) {
    square[m].innerHTML = ''
    // square[m].classList.remove('unclickable')
  }
}
// cards array holds all cards
let currentBoard = document.getElementsByClassName  TODO (array of shuffled pairs)
let cards = [...card]
// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard)
}

// ~~~~~~~~~~~~~~~~~~~~~
// SHUFFLE CARDS (Fisher-Yates Shuffle)
// ~~~~~~~~~~~~~~~~~~~~~

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// the 'deck' of cards in current game
const deck = document.querySelector(".deck");
function startGame(){
   var shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}

TODO button.onClick = startGame();

var flipCard = function () {
  this.classList.toggle("show")
  this.classList.toggle("disabled")
  this.classList.toggle("cardInUse")
}
// ~~~~~~~~~~~~~~~~~~~~~
// MATCHING CARDS
// ~~~~~~~~~~~~~~~~~~~~~

//add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

//for when cards match
function matched(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
}

//for when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1100);
}

//disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

//enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}
// ~~~~~~~~~~~~~~~~~~~~~
// START GAME
// ~~~~~~~~~~~~~~~~~~~~~
StartGame(){
     // shuffle deck
     cards = shuffle(cards);
     // remove all existing classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match",            "disabled");
     }
     // reset moves
     moves = 0;
     counter.innerHTML = moves;
    // reset star rating
    for (var i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
    //reset timer
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);

    // ~~~~~~~~~~~~~~~~~~~~~
    // PLAY AGAIN
    // ~~~~~~~~~~~~~~~~~~~~~
    //for player to play Again
function playAgain(){
    modal.classList.remove("show");
    startGame();
}
