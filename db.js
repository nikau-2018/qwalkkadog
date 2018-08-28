const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getWalker: getWalker,
  getWalkers: getWalkers,
  newUser: newUser,
  newDog: newDog,
  getDogs: getDogs
}

// Get user by ID.
function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('dogs', 'dogs.user_id', 'users.id')
    .where('users.id', id)
    .select(
      'users.name as userName', 'users.email', 'users.location as userLocation', 'users.is_walker as isWalker', 'users.experience', 'users.profile_pic as userPic', 'dogs.name as dogName', 'dogs.size', 'dogs.location as dogLocation', 'dogs.gender', 'dogs.breed', 'dogs.bio', 'dogs.profile_pic as dogPic'
    )
    .first()
}

// Get all users.
function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users')
  .join('dogs', 'dogs.user_id', 'users.id')
  .select(
    'users.name as userName', 'users.email', 'users.location as userLocation', 'users.is_walker as isWalker', 'users.experience', 'users.profile_pic as userPic', 'dogs.id as dogId', 'dogs.name as dogName', 'dogs.size', 'dogs.location as dogLocation', 'dogs.gender', 'dogs.breed', 'dogs.bio', 'dogs.profile_pic as dogPic'
  )
}

// Get walker profile.
function getWalker (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .where({
      'users.id': id,
      'users.is_walker': true || 1
    })
    .select('users.name as userName', 'users.email', 'users.location as userLocation', 'users.is_walker as isWalker', 'users.experience', 'users.profile_pic as userPic')
    .first()
}

// Get all walkers.
function getWalkers (testConn) {
  const conn = testConn || connection
  return conn('users')
    .where('users.is_walker', 1)
    .select('users.name as userName', 'users.email', 'users.location as userLocation', 'users.is_walker as isWalker', 'users.experience', 'users.profile_pic as userPic')
}

// Insert new user.
function newUser (user, testConn) {
  const conn = testConn || connection
  return conn('users')
    .insert({
      'name': user.name,
      'email': user.email,
      'location': user.location,
      'experience': user.experience,
      'profile_pic': user.profilePic,
      'is_walker': user.is_walker
    })
}

// Insert new dog & user.
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
      'profile_pic': dogData.dogProfilePic
    })
    .then((dogId) => {
      return conn('users')
        .insert({
          'name': dogData.ownerName,
          'email': dogData.email,
          'location': dogData.location,
          'profile_pic': dogData.ownerProfilePic,
          'dog_id': dogId[0]
        })
    })
}

// Get all dogs.
function getDogs (testConn) {
  const conn = testConn || connection
  return conn('dogs').select()
}
