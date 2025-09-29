const HardwareSystem = require('../../api/models/hardwareSystems')
const hardwareSystemsSeed = require('../../data/hardwareSystems')
const mongoose = require('mongoose')

const launchHsSeed = async () => {
  try {
    console.log('Connection in process...')
    await mongoose.connect(
      'mongodb+srv://aleixsu_db_user:QtatdOF9ptsue9Hy@cluster0.zuam1fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
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
