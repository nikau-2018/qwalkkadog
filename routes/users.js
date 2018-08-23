const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/index')
})

router.get('/home', (req, res) => {
  res.render('index')
})

router.get('/signupdog', (req, res) => {
  res.render('dogSignup')
})

router.post('/signupDog', (req, res) => {
  const dogData = req.body
  db.newDog(dogData)
    .then(//deal with the dog id passed in))
    .then(newUser())
    .then(() => {
      res.redirect(`/profile/${id}${type}`)
    })
})

router.get('/signupwalker', (req, res) => {
  res.render('userSignup')
})

router.post('/signupwalker', (req, res) => {

})

router.get(`/profile/${id}${type}`, (req, res) => {
})

router.post(`/profile/${id}${type}`, (req, res) => {
})

/* router.get('/try', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}) */

module.exports = router
