'use strict'

// const store = require('../store')

// const signUpSuccess = function (data) {
//   $('#sign-out').removeClass('hidden')
//   $('#signUp-modal').addClass('hidden')
//   $('#change-password').removeClass('hidden')
//   $('#signUpSuccess').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#signUpSuccess').modal('hide')
//   }, 2000)
//   $('#signUp-modal')[0].reset()
//   console.log('signUpSuccess ran. Data is :', data)
// }
//
// const signUpFailure = function (error) {
//   $('#signInFailure').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#signUpFailure').modal({
//       show: false
//     })
//   }, 2000)
//   $('#signUp-modal')[0].reset()
//   console.error('signUpFailure ran. Error is :', error)
// }
//
// const signInSuccess = function (data) {
//   $('#sign-out').removeClass('hidden')
//   $('#sign-in').addClass('hidden')
//   $('#signUp-modal').addClass('hidden')
//   $('#change-password').removeClass('hidden')
//   $('#myId').removeClass('hidden')
//   console.log('signInSuccess ran. Data is :', data)
//   $('#signInSuccess').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#signInSuccess').modal('hide')
//   }, 2000)
//   store.user = data.user
//   console.log(store.user.id)
//   $('#sign-in')[0].reset()
//   // $('#myId').html(`<p>${store.user.id}</p>`)
// }
//
// const signInFailure = function (error) {
//   $('#signInFailure').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#signInFailure').modal('hide')
//   }, 2000)
//   $('#sign-in')[0].reset()
//   console.error('signInFailure ran. Error is :', error)
// }
//
// const signOutSuccess = function () {
//   $('#sign-in').removeClass('hidden')
//   $('#signUp-modal').removeClass('hidden')
//   $('#sign-out').addClass('hidden')
//   $('#change-password').addClass('hidden')
//   $('#signOutSuccess').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#signOutSuccess').modal('hide')
//   }, 2000)
//   $('#sign-out')[0].reset()
//   // console.log('signOutSuccess ran and nothing was returned!')
//   store.user = null
// }
//
// const signOutFailure = function (error) {
//   $('#signOutFailure').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#signOutFailure').modal('hide')
//   }, 2000)
//   $('#sign-out')[0].reset()
//   console.error('signOutFailure ran. Error is :', error)
// }
//
// const changePasswordSuccess = function () {
//   $('#changePasswordSuccess').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#changePasswordSuccess').modal('hide')
//   }, 2000)
//   $('#change-password')[0].reset()
//   // console.log('changePasswordSuccess ran and nothing was returned!')
// }
//
// const changePasswordFailure = function (error) {
//   $('#changePasswordFailure').modal({
//     show: true
//   })
//   setTimeout(function () {
//     $('#changePasswordFailure').modal('hide')
//   }, 2000)
//   $('#change-password')[0].reset()
//   console.error('changePasswordFailure ran. Error is :', error)
// }

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
  showSignUpModal,
  showSignInModal,
  showSignOutModal,
  showChangePasswordModal
  // signUpSuccess,
  // signUpFailure,
  // signInSuccess,
  // signInFailure,
  // signOutSuccess,
  // signOutFailure,
  // changePasswordSuccess,
  // changePasswordFailure
}
