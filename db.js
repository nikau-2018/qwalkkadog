const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id)
    .join('dogs', 'dogs.id', 'users.dog_id')
    .first()
}

function newUser (user, testConn) {
  const conn = testConn || connection
  return conn('users')
    .insert(user)
}