'use strict'

const store = require('./store')
const game = require('../game')

const signUpSuccess = function (data) {
  $('#signUp-modal').addClass('hidden')
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
    $('#signUpFailure').modal({
      show: false
    })
  }, 2000)
  $('#sign-up')[0].reset()
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#signIn-modal').addClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  $('#signInSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signInSuccess').modal('hide')
  }, 2000)
  store.user = data.user
  console.log(store.user.id)
  $('#sign-in')[0].reset()
  // $('#myId').html(`<p>${store.user.id}</p>`)
}

const signInFailure = function (error) {
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
  $('#signOutSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#signOutSuccess').modal('hide')
  }, 2000)
  $('#sign-out')[0].reset()
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
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
  $('#changePasswordSuccess').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordSuccess').modal('hide')
  }, 2000)
  $('#change-password')[0].reset()
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#changePasswordFailure').modal({
    show: true
  })
  setTimeout(function () {
    $('#changePasswordFailure').modal('hide')
  }, 2000)
  $('#change-password')[0].reset()
  console.error('changePasswordFailure ran. Error is :', error)
}
//
// const animalArray = function (data) {
//   store.creatures = data.creatures
//   console.log(store.creatures)
//   for (let i = 0; i < store.creatures.length; i++) {
//     console.log(store.creatures[i].image)
//     //  doubling array
//     const animalArray1 = Array.from(store.creatures)
//     // animalArray.push(...animalArray1)
//     // const fullBoard = animalArray
//     console.log('fullBoard')
//     // iterating over array
//     for (let i = 0; i < fullBoard.length; i++) {
//       console.log(fullBoard[i].image)
//       $('#' + i).attr('data-animal-image', store.creatures[i].image)
//     }
//   }
// }
// //
// const animalArray = function (data) {
//   store.creatures = data.creatures
//   // returnArray = []
//   console.log(data.creatures)
//   for (let i = 0; i < 18; i++) {
//     console.log(store.creatures[i].image)
//     $('#' + i).attr('data-animal-image', store.creatures[i].image)
//     // then push retrunArray.push(store.creatures[i].image)
//     // return returnArray
//   }
// }

// // ~~~~~~~~~~~~~~~~~~~~~
// // SHUFFLE CARDS (Fisher-Yates Shuffle)
// // ~~~~~~~~~~~~~~~~~~~~~
function shuffle(array) {
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
  store.creatures = data.creatures
  console.log(data.creatures)
  const creatures2 = Array.from(store.creatures)
  const creatures3 = []
  let currentImage
  console.log('hello')
  for (let i = 0; i < 18; i++) {
    const randomIndex = Math.floor(Math.random() * (creatures2.length))
    // currentImage = creatures2[randomIndex]
    console.log(randomIndex + 'out of' + creatures2.length)
    currentImage = creatures2.splice(randomIndex, 1)
    // console.log(currentImage)
    creatures3[i] = currentImage[0]
    creatures3[i + 18] = currentImage[0]
  }

  shuffle(creatures3)

  for (let i = 0; i < 36; i++) {
    // Set currentImage
    $('#' + i).attr('data-animal-image', creatures3[i].image)
    // debugger
  }
  // for (let i = 0; i < 18; i++) {
  //   console.log(creatures2[i].image)
  //   $('#' + (i + 18)).attr('data-animal-image', creatures2[i].image)
    // returnArray.push(store.creatures[i].image)
    // debugger
  // }
  // creatures2.concat(c)
}

// const randomIndex = Math.floor(Math.random() * (store.creatures.length - 1)
// // Remove from creatures array so we don't re-pick
//   .creatures.splice(random, 1))
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

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  // fillBoard,
  showSignUpModal,
  showSignInModal,
  showSignOutModal,
  showChangePasswordModal,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  animalArray
}
