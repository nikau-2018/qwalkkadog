const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  const infoObj = new Object()
  db.getUsers()
    .then(dogs => {
      infoObj.dogsData = dogs
      db.getWalkers()
        .then(walkers => {
          infoObj.walkersData = walkers
          res.render('index', infoObj)
        })
    })
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
  const infoObj = new Object()

  db.getUser(id)
    .then(user => {
      // Handle a walker user.
      if (user === undefined) {
        // Get the walker profile.
        db.getWalker(id)
          .then(walker => {
            infoObj.userData = walker

            // Get the dogs data.
            db.getDogs()
              .then(dogs => {
                infoObj.dogsData = dogs
                res.render('profile', infoObj)
              })
          })
      } else {
        infoObj.userData = user
        res.render('profile', infoObj)
      }
    })
    .catch(
      err => res.status(500).send(err.message)
    )
})

router.get('/signupwalker', (req, res) => {
  res.render('userSignup')
})

router.post('/signupwalker', (req, res) => {
  const walkerData = req.body

  db.newUser(walkerData)
    .then(ids => {
      res.redirect(`/profile/${ids[0]}`)
    })
    .catch(
      err => {
        res.status(500).send(err.message)
      })
})

function getDogs () {
  db.getDogs()
    .then(dogs => {
      return dogs
    })
}

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
