// Require mongoose
const mongoose = require('mongoose')

// Connect to a local database called welp
mongoose.connect('mongodb://localhost/welp').then(() => {
    console.log('Connected to MongoDB')
})
.catch((e) => {
    console.log('An Error: ')
    console.log(e)
})

// export your mongoose connection
module.exports = mongoose