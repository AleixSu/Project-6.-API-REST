const HardwareSystem = require('../models/hardwareSystems')

const getHardwareSystems = async (req, res, next) => {
  try {
    const hardwareSystems = await HardwareSystem.find()
    if (!hardwareSystems.length) {
      return res.status(404).json({ message: 'No data found in collection' })
    }
    return res.status(200).json(hardwareSystems)
  } catch (error) {
    console.error('Data retrieval failed:', error)
    return res.status(400).json('Data retrieval failed')
  }
}

const getHardwareSystem = async (req, res, next) => {
  try {
    const { id } = req.params
    const hardwareSystem = await HardwareSystem.findById(id)
    if (!hardwareSystem) {
      return res.status(404).json({ message: 'hardwareSystem not found' })
    }
    return res.status(200).json(hardwareSystem)
  } catch (error) {
    console.error('Data retrieval failed:', error)
    return res.status(400).json('Data retrieval failed')
  }
}

const postHardwareSystem = async (req, res, next) => {
  try {
    const newHardwareSystem = new HardwareSystem(req.body)
    const hardwareSystemSaved = await newHardwareSystem.save()
    return res.status(201).json(hardwareSystemSaved)
  } catch (error) {
    console.error('Error creating hardwareSystem:', error)
    return res
      .status(400)
      .json({ message: 'Invalid data, could not create hardwareSystem' })
  }
}

const updateHardwareSystem = async (req, res, next) => {
  try {
    const { id } = req.params
    const newHardwareSystem = new HardwareSystem(req.body)
    newHardwareSystem._id = id
    const hardwareSystemUpdated = await HardwareSystem.findByIdAndUpdate(
      id,
      newHardwareSystem,
      { new: true }
    )
    if (!hardwareSystemUpdated) {
      return res.status(404).json({ message: 'hardwareSystem not found' })
    }
    return res.status(200).json(hardwareSystemUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Invalid data, could not update hardwareSystem' })
  }
}

const deleteHardwareSystem = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedHardwareSystem = await HardwareSystem.findByIdAndDelete(id)
    if (!deletedHardwareSystem) {
      return res.status(404).json({ message: 'hardwareSystem not found' })
    }
    return res
      .status(200)
      .json({ message: 'Data deleted', element: deletedHardwareSystem })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Invalid data, could not delete hardwareSystem' })
  }
}

module.exports = {
  getHardwareSystems,
  getHardwareSystem,
  postHardwareSystem,
  updateHardwareSystem,
  deleteHardwareSystem
}
