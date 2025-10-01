const hardwareSystemsSeed = require('../../data/hardwareSystems')
const videoGames = require('../../data/videoGames')

const seedHelper = (insertedSystems) => {
  const dataSystems = []

  for (const system of hardwareSystemsSeed) {
    dataSystems.push(system.name)
  }
  const systemsId = {}
  for (const system of insertedSystems) {
    if (dataSystems.includes(system.name)) {
      systemsId[system.name] = system._id
    }
  }
  const result = systemsId

  const videoGameSeed = []

  for (const videogame of videoGames) {
    videogame.platform = videogame.platform.map((p) => {
      return result[p] || p
    })
    videoGameSeed.push(videogame)
  }
  return videoGameSeed
}

module.exports = seedHelper
