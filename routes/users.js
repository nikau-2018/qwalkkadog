const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/home')
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
    .then(ids => res.redirect(`/profile/${ids[0]}`))
    .catch(
      err => {
        res.status(500).send(err.message)
      })
})

router.get('/profile/:id', (req, res) => {
  const id = req.params.id
  db.getWalker(id)
    .then((walker) => {
      // console.log(user[0])
      if (walker[0].is_walker) {
        res.render('profile', walker[0])
      } else {
        db.getUser(id)
          .then((owner) => res.render('profile', owner))
      }
    })
})

router.get('/signupwalker', (req, res) => {
  res.render('userSignup')
})

router.post('/signupwalker', (req, res) => {
  const walkerData = req.body
  db.newUser(walkerData)
    .then(ids => res.redirect(`/profile/${ids[0]}`))
    .catch(
      err => {
        res.status(500).send(err.message)
      })
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
