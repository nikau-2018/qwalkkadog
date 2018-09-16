const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()

// Middleware
server.use(express.static('public'))

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
// server.use(express.urlencoded({extended: true}))

// Tell Express how to process the body of the request messages.
server.use(express.json())

// Routes

server.use('/', userRoutes)

module.exports = server
