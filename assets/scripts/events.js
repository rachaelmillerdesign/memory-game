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
    .then(ui.getAllCreaturesSuccess)
    .then(ui.fillBoard)
  console.log('index()')
}
const closeModals = function () {
  $('#closeButton').on('click',
    $('#modal').toggleClass('hidden')
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~
// FLIP CARDS CSS
// ~~~~~~~~~~~~~~~~~~~~~~
const hideBack = function (e) {
  const newSrc = $(e.target).attr('data-animal-image')
  $(e.target).attr('src', newSrc)
  const showBack = function (e) {
    if ($(e.target).attr('newSrc')) {
      $(e.target).attr('src')
    }
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~
const addHandlers = () => {
  console.log("in handler 'click'")
  $('#closeButton').on('click', closeModals)
  $('img').on('click', hideBack)
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
