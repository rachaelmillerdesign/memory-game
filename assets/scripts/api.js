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

// ~~~~~~~~~~~~~~~~~~~~
//  GET CREATURES AND CREATE FAVORITES API
// ~~~~~~~~~~~~~~~~~~~~

const getAllCreaturesAjax = function () {
  return $.ajax({
    url: config.apiUrl + '/creatures',
    method: 'GET'
  })
}

const createFavoriteAjax = function (data) {
  console.log('in createFavoriteAjax')
  return $.ajax({
    url: config.apiUrl + '/favorites',
    data: JSON.stringify(data),
    contentType: 'application/json',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getMyFavoritesAjax = function (data) {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data,
    success: function (data) {
      console.log('in ajax data and response is', data)
      for (let e = 0; e < data.favorites.length; e++) {
        $('.myFavorites').append(`<li><img src='${data.favorites[e].creature.image}'/></li>`)
      }
      $('.favorites').addClass('hidden')
      $('.board').addClass('hidden')
      $('.myFavorites').removeClass('hidden')
    }
  })
}

$('#favorites').on('click', getMyFavoritesAjax)

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  getAllCreaturesAjax,
  createFavoriteAjax,
  signUp,
  signIn,
  signOut,
  changePassword,
  getMyFavoritesAjax
}
