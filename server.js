// Require modules
const express = require('express')
const app = express()
const logger = require('morgan')
const methodOverride = require('method-override')
const routes = require('./routes/index.js')

// Register middleware
// BodyParser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// method override
app.use(methodOverride('_method'))

// Set view engine
app.set('view-engine', 'hbs')

// logger

// Set up route middleware
app.use('/', routes)

// Set up to listen to PORT 3001
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})