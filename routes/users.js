const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/index')
})

router.get('/home', (req, res) => {
  res.render('index')
})

router.get('/dogsignup', (req, res) => {
  res.render('dogSignup')
})

router.post('/dogsignup', (req, res) => {
  const dogData = req.body
  db.newDog(dogData)

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
