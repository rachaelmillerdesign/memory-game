'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/murmuring-brushlands-54907.git',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
