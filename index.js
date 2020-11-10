const express = require('express')
const login = require('./login')
const register = require('./register')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// enable cors
app.use(cors({ origin: '*' }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/login', login);
app.use('/register', register);
app.listen(3000)

