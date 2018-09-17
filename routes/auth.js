const express = require('express')
const db = require('../db')

const router = express.Router()

router.post('/register', register)

// Register new user.
function register (req, res) {
  const {username, password} = req.body
  db.createUser(username, password)
    .then(() => res.status(201).json({ok: true}))
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

module.exports = router
