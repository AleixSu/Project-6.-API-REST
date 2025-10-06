const {
  getHardwareSystems,
  getHardwareSystem,
  postHardwareSystem,
  updateHardwareSystem,
  deleteHardwareSystem
} = require('../controllers/hardwareSystems')

const hardwareSystemsRouter = require('express').Router()

hardwareSystemsRouter.get('/', getHardwareSystems)
hardwareSystemsRouter.get('/:id', getHardwareSystem)
hardwareSystemsRouter.post('/', postHardwareSystem)
hardwareSystemsRouter.patch('/:id', updateHardwareSystem)
hardwareSystemsRouter.delete('/:id', deleteHardwareSystem)

module.exports = hardwareSystemsRouter
