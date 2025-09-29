const {
  getVideogames,
  getVideogame,
  postVideogame,
  updateVideogame,
  deleteVideogame,
  updateVideogameAdd
} = require('../controllers/videoGames')

const videoGamesRouter = require('express').Router()

videoGamesRouter.get('/', getVideogames)
videoGamesRouter.get('/:id', getVideogame)
videoGamesRouter.post('/', postVideogame)
videoGamesRouter.put('/:id', updateVideogame)
videoGamesRouter.put('/add/:id', updateVideogameAdd)
videoGamesRouter.delete('/:id', deleteVideogame)

module.exports = videoGamesRouter
