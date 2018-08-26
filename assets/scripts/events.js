'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// ~~~~~~~~~~~~~~~~~~~~~~`
//  FORM FIELD FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~`

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onGetAllCreatures = function (event) {
  event.preventDefault()
  api.getAllCreaturesAjax()
    .then(ui.animalArray)
    .then(ui.fillBoard)
  console.log('index()')
}
const closeModals = function () {
  $('#closeButton').on('click',
    $('#modal').toggleClass('hidden')
  )
}

let flippedCards = []
// ~~~~~~~~~~~~~~~~~~~~~~
// FLIP CARDS CSS /CHECK FOR MATCH
// ~~~~~~~~~~~~~~~~~~~~~~
const showFront = function (e) {
  const newSrc = $(e.target).attr('data-animal-image')
  $(e.target).attr('src', newSrc)
  console.log('e.target: ')
  console.log(e.target)
  console.log($(e.target).attr('data-animal-image'))
  flippedCards.push(e.target)
  console.log(':' + $(flippedCards[0]).attr('data-animal-image'))
  if (flippedCards.length === 2) {
    if ($(flippedCards[0]).attr('data-animal-image') === $(flippedCards[1]).attr('data-animal-image')) {
      console.log('cards match ' + $(flippedCards[0]).attr('data-animal-image') + ' ' + $(flippedCards[1]).attr('data-animal-image'))
      match(flippedCards)
    } else {
      console.log('showBack ' + flippedCards[0].id + ' ' + flippedCards[1].id)
      setTimeout(showBack, 4000, flippedCards)
      console.log('after timeout')
    }
    flippedCards = []
  }
}

const match = function (matchedCards) {
  $(matchedCards[0]).addClass('unclickable')
  $(matchedCards[1]).addClass('unclickable')
}

const showBack = function (selector) {
  const src = 'public/images/241_square.jpg'
  $(selector[0]).attr('src', src)
  $(selector[1]).attr('src', src)
}

// ~~~~~~~~~~~~~~~~~~~~~~
// HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~
const addHandlers = () => {
  console.log("in handler 'click'")
  $('#closeButton').on('click', closeModals)
  $('img').on('click', showFront, ui.checkForMatch)
  $('#getCreaturesButton').on('click', onGetAllCreatures)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#signUpNav').on('click', ui.showSignUpModal)
  $('#signInNav').on('click', ui.showSignInModal)
  $('#signOutNav').on('click', ui.showSignOutModal)
  $('#changePasswordNav').on('click', ui.showChangePasswordModal)
}

module.exports = {
  addHandlers
}
