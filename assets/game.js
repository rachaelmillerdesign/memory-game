// const store = require('./scripts/store')
//
// const cardBack = $('this.cardBack')
// const cardFront = $('this.cardFront')
//
// // ~~~~~~~~~~~~~~~~~~~~~
// // CREATE NEW GAME
// // ~~~~~~~~~~~~~~~~~~~~~
// TODO: add button for new game and link
// function clearBoard() {
//   for (let c = 0; c < currentArray.length; c++) {
//     this.currentArray('hide')
//   }
// }

// // ~~~~~~~~~~~~~~~~~~~~~
// // SHUFFLE CARDS (Fisher-Yates Shuffle)
// // ~~~~~~~~~~~~~~~~~~~~~
// function shuffle(array) {
//   var currentIndex = array.length,
//     temporaryValue, randomIndex;
//
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

// ~~~~~~~~~~~~~~~~~~~~~
// MATCHING CARDS
// ~~~~~~~~~~~~~~~~~~~~~
//
// let flippedCard = flippedCards[]
//
// function checkForMatch() {
//   flippedCard.push(this)
//   var length = flippedCards.length;
//   if (length === 2) {
//     moveCounter()
//     if (flippedCard[0].type === flippedCard[1].type) {
//       matched()
//     } else {
//       unmatched()
//       if unmatched() {
//         this.flippedCard.toggle('show')
//       }
//     }
//   }
// }

// const alternateFlip = function (current) {
//   if (current === $('.cardBack')) {
//     current = $('.cardFront')
//     current = 'o'
//   } else {
//     current = 'x'
//   }
//   return current
// }

// let flip = function () {
//   $('.cardBack').on('click', flip)
// }

// .flip-container.hover .flipper, .flip-container.hover .flipper, .flip-container.flip .flipper {
// transform: rotateY(180deg);
// }

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~
//
// module.exports = {
// //   // fillBoard,
//   getCreaturesRandomly
// }
