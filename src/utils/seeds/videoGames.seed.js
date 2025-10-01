const mongoose = require('mongoose')
require('dotenv').config()
const VideoGame = require('../../api/models/videoGames')
const videoGameSeed = require('../seedHelpers/seedHelper')

const launchVgSeed = async () => {
  try {
    console.log('Connection in process...')
    await mongoose.connect(process.env.DB2_URL)
    console.log('Database connection established')
    await VideoGame.collection.drop()
    console.log('Old collection removed from database')
    await VideoGame.insertMany(videoGameSeed)
    console.log('Data succesfully seeded')
    await mongoose.disconnect()
    console.log('Database connection closed')
  } catch (error) {
    console.log('Failed to connect to Database:' + error)
  }
}

launchVgSeed()
