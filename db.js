const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function newDog (dogData, testConn) {
  const conn = testConn || connection
  return conn('dogs')
    .insert({
      'name': dogData.name,
      'size': dogData.size,
      'location': dogData.location,
      'gender': dogData.gender,
      'breed': dogData.breed,
      'bio': dogData.bio,
      'profile_pic': dogData.profilePic
    })

function newUser (dogData, id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .insert({
      'name': 
    })
