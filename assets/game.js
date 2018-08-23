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
//
// const getCreaturesRandomly = function () {
//   // console.log(store, 'hi')
//   const currentBoard = []
//   for (let x = 0; x < 18; x++) {
//     // pick a random int from 0 to 17
//     const randomIndex = Math.floor(Math.random() * (store.creatures.length - 1)
//     // Remove from creatures array so we don't re-pick
//       // .creatures.splice(random, 1))
//   }
//
// }
// push 18 randonmly selected creatures to empty board, 2x each, randomly
// .selected.push(creature.image)
// .selected.push(creature.image)
//
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
//
// const addHandlers = () => {
//   // loop to add event listeners to each card
//   for (var i = 0; i < .length; i++) {
//     cards[i].addEventListener("click", flipCard)
//   }
//   $('#signUpNav').on('click', ui.showSignUpModal)
// }
// let image =
//   let flipCard = function() {
//     this.cardFront.toggle("show")
//   }
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
// ~~~~~~~~~~~~~~~~~~~~~~
// FLIP CARDS CSS
// ~~~~~~~~~~~~~~~~~~~~~~
//
// .flip-container.hover .flipper, .flip-container.hover .flipper, .flip-container.flip .flipper {
// transform: rotateY(180deg);
// }
// $('#cardBack').onclick(flip())
// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~
//
// module.exports = {
// //   // fillBoard,
//   getCreaturesRandomly
// }
