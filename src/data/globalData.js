const HardwareSystem = require('../api/models/hardwareSystems')
const VideoGame = require('../api/models/videoGames')
const hardwareSystemsSeed = require('./hardwareSystems')
const videoGames = require('./videoGames')

const hardwareArray = {
  name: 'Hardware Systems data',
  array: hardwareSystemsSeed,
  model: HardwareSystem
}
const videogameArray = {
  name: 'Videogames data',
  array: videoGames,
  model: VideoGame
}

module.exports = { hardwareArray, videogameArray }
