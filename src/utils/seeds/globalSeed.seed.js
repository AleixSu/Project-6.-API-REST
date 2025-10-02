require('dotenv').config()
const mongoose = require('mongoose')
const seedHelper = require('../seedHelpers/seedHelper')
const { hardwareArray, videogameArray } = require('../../data/globalData')

const launchSeed = async (array1, array2) => {
  try {
    console.log('Connection in process...')
    await mongoose.connect(process.env.DB2_URL)
    console.log('Database connection established')

    await array1.model.collection.drop()
    console.log('Old collection removed from database')
    const insertedSystems = await array1.model.insertMany(array1.array)

    console.log(`${array1.name} succesfully seeded`)

    await array2.model.collection.drop()
    console.log('Old collection removed from database')
    await array2.model.insertMany(seedHelper(insertedSystems))
    console.log(`${array2.name} succesfully seeded`)

    await mongoose.disconnect()
    console.log('Database connection closed')
  } catch (error) {
    console.log('Failed to connect to Database:' + error)
  }
}

launchSeed(hardwareArray, videogameArray)
