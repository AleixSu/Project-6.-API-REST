require('dotenv').config()
const express = require('express')
const connectDB = require('./src/config/db')
const videoGamesRouter = require('./src/api/routes/videoGames')
const hardwareSystemsRouter = require('./src/api/routes/hardwareSystems')

const app = express()
app.use(express.json())
connectDB()

app.use('/api/v1/videogames', videoGamesRouter)
app.use('/api/v1/hardwaresystems', hardwareSystemsRouter)
app.use((req, res, next) => {
  return res.status(404).json('route not found')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
