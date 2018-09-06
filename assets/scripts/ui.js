'use strict'

const store = require('./store')

// ~~~~~~
// LOCK BOARD
// ~~~~~~
const unlocked = function () {
  $('img').removeClass('unclickable')
}

const locked = function () {
  $('img').addClass('unclickable')
}

const signUpSuccess = function (data) {
  $('#signUp-modal').addClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#signOutNav').removeClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  $('#signUpSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signUpSuccess').modal('hide')
  }, 2000)
  $('#sign-up')[0].reset()
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#signUp-modal').addClass('hidden')
  $('#signUpFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#signUpFailure').modal('hide')
  }, 2000)
  $('#sign-up')[0].reset()
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#signIn-modal').addClass('hidden')
  $('#signInNav').addClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#signOutNav').removeClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  $('#favorites').removeClass('hidden')
  $('#play').removeClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  $('#signInSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signInSuccess').modal('hide')
  }, 2000)
  store.user = data.user
  unlocked()
  console.log(store.user.id)
  $('#sign-in')[0].reset()
}

const signInFailure = function (error) {
  $('#sign-in').addClass('hidden')
  $('#signInFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#signInFailure').modal('hide')
  }, 2000)
  $('#sign-in')[0].reset()
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#signInNav').removeClass('hidden')
  $('#signUpNav').removeClass('hidden')
  $('#signOutNav').addClass('hidden')
  $('#changePasswordNav').addClass('hidden')
  $('#favorites').addClass('hidden')
  $('#play').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#signOutSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signOutSuccess').modal('hide')
  }, 2000)
  $('#sign-out')[0].reset()
  store.user = null
}

const signOutFailure = function (error) {
  $('#sign-out').addClass('hidden')
  $('#signOutFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#signOutFailure').modal('hide')
  }, 2000)
  $('#sign-out')[0].reset()
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#change-password').addClass('hidden')
  $('#changePasswordSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordSuccess').modal('hide')
  }, 2000)
  $('#change-password')[0].reset()
}

const changePasswordFailure = function (error) {
  $('#change-password').addClass('hidden')
  $('#changePasswordFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordFailure').modal('hide')
  }, 2000)
  $('#change-password')[0].reset()
  console.error('changePasswordFailure ran. Error is :', error)
}

const foundAllMatchesSuccess = function () {
  $('#found all matches').modal({
    show: true
  })
  setTimeout(function () {
    $('#foundAllMatchesSuccess').modal('hide')
  }, 2000)
}

// // ~~~~~~~~~~~~~~~~~~~~~
// // SHUFFLE CARDS (Fisher-Yates Shuffle)
// // ~~~~~~~~~~~~~~~~~~~~~

function shuffle (array) {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

const animalArray = function (data) {
  // creatures is file name in database
  store.creatures = data.creatures
  console.log(data.creatures)
  // creatures2 is an array from store.creatures
  const creatures2 = Array.from(store.creatures)
  // creatures3 is an empty array that creatures to gets shuffled and put into
  const creatures3 = []
  let currentImage
  for (let i = 0; i < 18; i++) {
    const randomIndex = Math.floor(Math.random() * (creatures2.length))
    // randomly select image from randomly selected array creatures3, double and shuffle)
    currentImage = creatures2.splice(randomIndex, 1)
    console.log(creatures2[i])
    creatures3[i] = currentImage[0]
    console.log(creatures3[i])
    creatures3[i + 18] = currentImage[0]
  }

  shuffle(creatures3)
  store.creaturesGameInPlay = []
  // replace placeholders with creatures3 images
  for (let i = 0; i < 36; i++) {
    $('#' + i).attr('data-animal-image', creatures3[i].image)
    store.creaturesGameInPlay.push(creatures3[i])
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById('play')
$('#play').on('click', startGame)

function startGame () {
  for (let c = 0; c < 36; c++) {
    $('#' + c).attr('data-animal-image', 0)
    console.log('game started')
    $('#gameStarted').removeClass('hidden')
    setTimeout(function () {
      $('#gameStarted').addClass('hidden')
    }, 2000)
  }
  $('showBack')
}
// ~~~~~~~~~~~~~~~~~~~~~~
// CREATE FAVORITE
// ~~~~~~~~~~~~~~~~~~~~~~

const createFavoriteSuccess = function () {
  $('#createdFavoriteSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#createdFavoriteSuccess').modal('hide')
  }, 2000)
}

// ~~~~~~~~~~~~~~~~~~~~~~
// NAVBAR
// ~~~~~~~~~~~~~~~~~~~~~~

const showSignUpModal = function () {
  console.log('sign Up clicked')
  $('#signUp-modal').toggleClass('hidden')
}

const showSignInModal = function () {
  console.log('sign in clicked')
  $('#signIn-modal').toggleClass('hidden')
}

const showSignOutModal = function () {
  console.log('sign out clicked')
  $('#signOut-modal').toggleClass('hidden')
}

const showChangePasswordModal = function () {
  console.log('password changed')
  $('#changePassword-modal').toggleClass('hidden')
}

const showGameStartedModal = function () {
  console.log('play again!')
  $('#gameStarted').removeClass('hidden')
  setTimeout(function () {
    $('#gameStarted').addClass('hidden')
  }, 1000)
}

const hideModal = function () {
  console.log('close button clicked')
  $('.modal').addClass('hidden')
}

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  showSignUpModal,
  showSignInModal,
  showSignOutModal,
  showChangePasswordModal,
  showGameStartedModal,
  hideModal,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  animalArray,
  locked,
  unlocked,
  foundAllMatchesSuccess,
  createFavoriteSuccess
}
