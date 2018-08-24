const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser,
  newDog: newDog
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

function newDog (dogData, testConn) {
  const conn = testConn || connection
  return conn('dogs')
    .insert({
      'name': dogData.dogName,
      'size': dogData.size,
      'gender': dogData.gender,
      'location': dogData.location,
      'breed': dogData.breed,
      'bio': dogData.bio,
      'profile_pic': dogData.profile_pic
    })
    .then((dogId) => {
      return conn('users')
        .insert({
          'name': dogData.ownerName,
          'email': dogData.email,
          'location': dogData.location,
          'dog_id': dogId[0]
        })
    })
}

/* function newDog (dogData, testConn) {
  const conn = testConn || connection
  return conn('dogs')
    .join('users', 'users.dog_id', 'dogs.id')
    .insert({
      'name': dogData.ownerName,
      'users.email': dogData.email,
      'users.location': dogData.location,
      'dogs.location': dogData.location,
      'dogs.name': dogData.name,
      'size': dogData.size,
      'dogs.gender': dogData.gender,
      'dogs.breed': dogData.breed,
      'dogs.bio': dogData.bio,
      'dogs.profile_pic': dogData.profile_pic
    })
} */
