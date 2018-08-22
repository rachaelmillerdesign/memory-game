let emptyBoard = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
// let currentArray = this.emptyBoard
// let imageDatabase = []
const cardBack = $('this.cardBack')
let matched = []
let notMatched = []
let card =

// ~~~~~~~~~~~~~~~~~~~~~
// TEST RETRIEVE AND SHOW IMAGE TO 'TEST' DIV
// ~~~~~~~~~~~~~~~~~~~~~
GetShowImageTest = function (data){
document.getElementById('test')

}
  // ~~~~~~~~~~~~~~~~~~~~~
  // CREATE NEW GAME
  // ~~~~~~~~~~~~~~~~~~~~~

  function clearBoard() {
    for (var c = 0; c < currentArray.length; c++) {
      this.currentArray('hide')
    }

    // const getImages = function () {
    //   $(#'getCreaturesButton').on('click', )
    // }
    /* ajax call will return this JSON

    {
      creatures: [
        {
          image: ...
          common_name: ...
        },
        {

        },
        {}
      ]
    }
    ajax get to url get back data
    */

    let fillBoard = function() {
      for (var x = 0; x < 18; x++) {
        // Randomly pick one from the array of creatures
        var randomImage = creatures[x].image
        //try to display one image to browser html
        //retrieve 18 randlomly put x2 grid
        var data = [{
          common_name: "",
          latin_name: "",
          description: "",
          iucn_status: "",
          habitat: "",
          image: ""
        }]
        data.forEach(function(x) {
            result[x.image] = result[x.image] || []
            result[x.image].push("image")
            console.log(result)
            selected.push(creature.image)
            selected.push(creature.image)
            // Remove from creatures array so we don't re-pick
            creatures.splice(random, 1)
          }
        )
        }
      }

    // $('.thumbnail').click(function (eve) {
    //     $(".imageforthumbs").attr('src', $(eve.target).attr('src'));
    // })

    //
    // let fillBoard = function () {
    //   for (var x = 0; x < 18; x++) {
    //     // Randomly pick one from the array of creatures
    //     var randomImage = creatures[x].image
    //     //try to display one image to browser html
    //     //retrieve 18 randlomly put x2 grid
    //     // Push 2 copies onto array
    //     selected.push(creature)
    //     selected.push(creature)
    //     // Remove from creatures array so we don't re-pick
    //     creatures.splice(random, 1)
    //   }
    // }
    // ~~~~~~~~~~~~~~~~~~~~~
    // SHUFFLE CARDS (Fisher-Yates Shuffle)
    // ~~~~~~~~~~~~~~~~~~~~~
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    let image =

    let flipCard = function() {
      this.image.toggle("show")
    }
    // loop to add event listeners to each card
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", flipCard)
    }
    // ~~~~~~~~~~~~~~~~~~~~~
    // MATCHING CARDS
    // ~~~~~~~~~~~~~~~~~~~~~

    let flippedCard = flippedCards[]

    function checkForMatch() {
      flippedCard.push(this)
      var length = flippedCards.length;
      if (length === 2) {
        moveCounter()
        if (flippedCard[0].type === flippedCard[1].type) {
          matched()
        } else {
          unmatched()
          if unmatched() {
            this.flippedCard.toggle('show')
          }
        }
      }
    }

    function disableCard

    function showMatchCard

    function gameOver

    function newGame

    function startGame
