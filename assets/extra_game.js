
// function emptyfronts () {
//   const front = $('.front')
//   for (let m = 0; m < front.length; m++) {
//     front[m].innerHTML = ''
//     // front[m].classList.remove('unclickable')
//   }
// }

// let fillBoard = function () {
// for (var x = 0; x < 18; x++) {
//     // Randomly pick one from the array of creatures
//     var randomImage =
//     // Push 2 copies onto array
//     selected.push(face);
//     selected.push(face);
//     // Remove from faces array so we don't re-pick
//     faces.splice(randomInd, 1);
// }
// }
//add opened cards to OpenedCards list and check if cards are match or not


//for when cards match
function matched(){
    shownCards[0].classList.add("match");
    shownCards[1].classList.add("match");
    shownCards[0].classList.remove("show", "open");
    shownCards[1].classList.remove("show", "open");
    shownCards = [];
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
        card.classList.add('unclickable');
    });
}

//enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('unclickable');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("unclickable");
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
        cards[i].classList.remove("show", "open", "match", "unclickable");
     }
    //  // reset moves
    //  moves = 0;
    //  counter.innerHTML = moves;
    // // reset star rating
    // for (var i= 0; i < stars.length; i++){
    //     stars[i].style.color = "#FFD700";
    //     stars[i].style.visibility = "visible";
    // }
    // //reset timer
    // var timer = document.querySelector(".timer");
    // timer.innerHTML = "0 mins 0 secs";
    // clearInterval(interval);

    // ~~~~~~~~~~~~~~~~~~~~~
    // PLAY AGAIN
    // ~~~~~~~~~~~~~~~~~~~~~
    //for player to play Again

function playAgain(){
    modal.classList.remove("show");
    startGame();
}
