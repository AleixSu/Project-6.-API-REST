const mongoose = require('mongoose')
require('dotenv').config()
const HardwareSystem = require('../../api/models/hardwareSystems')
const hardwareSystemsSeed = require('../../data/hardwareSystems')

const launchHsSeed = async (firstSeed, secondSeed) => {
  try {
    console.log('Connection in process...')
    await mongoose.connect(process.env.DB2_URL)
    console.log('Database connection established')
    await HardwareSystem.collection.drop()
    console.log('Old collection removed from database')
    await HardwareSystem.insertMany(hardwareSystemsSeed)
    console.log('Data succesfully seeded')
    await mongoose.disconnect()
    console.log('Database connection closed')
  } catch (error) {
    console.log('Failed to connect to Database:' + error)
  }
}

launchHsSeed()
