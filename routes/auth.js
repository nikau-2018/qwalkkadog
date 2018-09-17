const express = require('express')
const db = require('../db')
const verifyJwt = require('express-jwt')

const router = express.Router()

const token = require('../auth/token')

router.post('/register', register, token.issue)

// Register new user.
function register (req, res, next) {
  const {username, password} = req.body
  db.createUser(username, password)
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      if (message.includes('UNIQUE constraint failed: users.username')) {
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      })
    })
}

// Protected route.
router.get('/user/:id', verifyJwt({secret: process.env.JWT_SECRET}), user)

function user (req, res) {
  db.getAuthUser(req.params.id)
    .then(({username}) =>
      res.json({
        ok: true,
        username
      }))
    .catch(() =>
      res.status(500).json({
        ok: false,
        message: 'An error ocurred while retrieving your user profile.'
      }))
}

module.exports = router
