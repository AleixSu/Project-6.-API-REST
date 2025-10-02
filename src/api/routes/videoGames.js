const {
  getVideogames,
  getVideogame,
  postVideogame,
  deleteVideogame,
  updateVideogameAdd
} = require('../controllers/videoGames')

const videoGamesRouter = require('express').Router()

videoGamesRouter.get('/', getVideogames)
videoGamesRouter.get('/:id', getVideogame)
videoGamesRouter.post('/', postVideogame)
videoGamesRouter.patch('/:id', updateVideogameAdd)
videoGamesRouter.delete('/:id', deleteVideogame)

module.exports = videoGamesRouter
