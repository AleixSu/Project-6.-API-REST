const mongoose = require('mongoose')
const VideoGame = require('../../api/models/videoGames')
const videoGameSeed = require('../seedHelpers/seedHelper')

const launchVgSeed = async () => {
  try {
    console.log('Connection in process...')
    await mongoose.connect(
      'mongodb+srv://aleixsu_db_user:QtatdOF9ptsue9Hy@cluster0.zuam1fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
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
