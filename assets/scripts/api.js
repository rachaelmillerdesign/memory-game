'use strict'

const config = require('./config')
const store = require('./store')

// ~~~~~~~~~~~~~~~~~~~~
//  SIGN UP SIGN IN API
// ~~~~~~~~~~~~~~~~~~~~

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllCreaturesAjax = function () {
  return $.ajax({
    url: config.apiUrl + '/creatures',
    method: 'GET'
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  getAllCreaturesAjax,
  signUp,
  signIn,
  signOut,
  changePassword
}
