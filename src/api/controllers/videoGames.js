const VideoGame = require('../models/videoGames')

const getVideogames = async (req, res, next) => {
  try {
    const videoGames = await VideoGame.find().populate('platform')
    if (!videoGames.length) {
      return res.status(404).json({ message: 'No data found in collection' })
    }
    return res.status(200).json(videoGames)
  } catch (error) {
    console.error('Data retrieval failed:', error)
    return res.status(400).json('Data retrieval failed')
  }
}

const getVideogame = async (req, res, next) => {
  try {
    const { id } = req.params
    const videoGame = await VideoGame.findById(id).populate('platform')
    if (!videoGame) {
      return res.status(404).json({ message: 'Videogame not found' })
    }
    return res.status(200).json(videoGame)
  } catch (error) {
    console.error('Data retrieval failed:', error)
    return res.status(400).json('Data retrieval failed')
  }
}

const postVideogame = async (req, res, next) => {
  try {
    const newVideogame = new VideoGame(req.body)
    const videogameSaved = await newVideogame.save()
    return res.status(201).json(videogameSaved)
  } catch (error) {
    console.error('Error creating videogame:', error)
    return res
      .status(400)
      .json({ message: 'Invalid data, could not create videogame' })
  }
}
const updateVideogame = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVideogame = new VideoGame(req.body)
    newVideogame._id = id
    const videogameUpdated = await VideoGame.findByIdAndUpdate(
      id,
      newVideogame,
      {
        new: true
      }
    )
    if (!videogameUpdated) {
      return res.status(404).json({ message: 'Videogame not found' })
    }
    return res.status(200).json(videogameUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Invalid data, could not update videogame' })
  }
}

const updateVideogameAdd = async (req, res, next) => {
  try {
    const { id } = req.params
    const { category, platform, ...rest } = req.body //Guardamos en variables los valores de req.body de category y platform espécifacmentey usamos rest para las que no se aplicará el set ni el addtoset.

    const updateData = { ...rest } //Creamos una variable "vacía" de las claves a las que aplicaremos set y addtoset, es decir solo metemos el "resto"

    if (category) {
      //En el caso de que req.body sea category
      updateData.$addToSet = {
        //usamos el operador addToSet para añadir elementos sin duplicarlos
        ...(updateData.$addToSet || {}), //* Leer más abajo la explicación
        category: { $each: category } // añade cada uno de los elementos uno por uno al array
      }
    }
    if (platform) {
      updateData.$addToSet = {
        ...(updateData.$addToSet || {}),
        platform: { $each: platform }
      }
    }
    const videogameUpdated = await VideoGame.findByIdAndUpdate(id, updateData, {
      new: true
    })
    if (!videogameUpdated) {
      return res.status(404).json({ message: 'Videogame not found' })
    }
    return res.status(200).json(videogameUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Invalid data, could not update videogame' })
  }
}

const deleteVideogame = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedVideogame = await VideoGame.findByIdAndDelete(id)
    if (!deletedVideogame) {
      return res.status(404).json({ message: 'Videogame not found' })
    }
    return res
      .status(200)
      .json({ message: 'Data deleted', element: deletedVideogame })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Invalid data, could not delete videogame' })
  }
}

module.exports = {
  getVideogames,
  getVideogame,
  postVideogame,
  updateVideogame,
  updateVideogameAdd,
  deleteVideogame
}

//* Usamos || por si dentro de la misma operación ya hemos llamado a addToSet. Por ejemplo, si en la operación solo actualizamo category o solo platform no pasaría nada pero si actualizamos los dos a la vez y ponemos dos veces addtoset la que esté más abajo sobrescribe a la primera y solo se actualizaría la segunda vez que se llama a addToSet.
