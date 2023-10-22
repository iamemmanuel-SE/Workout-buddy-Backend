require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const cors = require ("cors")


// expres app
const app = express()

// middleware
app.use(express.json())

app.use(cors());

app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true")
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
//listen for requests
app.listen(process.env.PORT, () => {
    console.log('connected to db and listening on port 1100')
})
})
.catch(error => {
    console.log(error)
})

