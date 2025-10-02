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
    return res.status(200).json(videoGame.category)
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

/* 
$set: Crea un nuevo campo si no existía a partir del valor específicado. Si ya existe lo actualiza. Mongo lo hace por defecto sin tener que poner $set en el código. USO: Asigna o modifica valores del campo, incluyendo la creación de campos y adición de nuevos datos a un documento.
$addToSet: Añade elementos únicos a la matriz. Es decir si no existe ya ese valor lo mete, si no no. Ideal para mantener un conjunto de valores únicos dentro de una matriz. USO: Asegura que no haya duplicados en una array, añadiendo un nuevo valor solo si es distinto a los elementos existentes
*/

const updateVideogameAdd = async (req, res, next) => {
  try {
    const { id } = req.params
    const { category, platform, ...rest } = req.body //Hacemos destructuring de req.body con las claves que nos envíen y guardamos en variables separadas category y platform que son las que nos interesan y el resto las guardamos mediante "...rest"

    const updateData = { ...rest } //Empezamos creando el objeto de la actualización solo con lo que va con "set" (que lo hace mongo por defecto) y esos serán las claves que no nos interesa pasar por addtoset.

    if (category) {
      //En el caso de el category que nos envían desde req.body no sea null o undefined:
      updateData.$addToSet = {
        //Seguimos creando el objeto de la actualización pero usamos el operador addToSet para añadir elementos sin duplicarlos
        ...(updateData.$addToSet || {}), //*Usamos los 3 puntos para copiar las claves que hemos metido en la linea 70 y usamos || por si antes no habíamos inicializado el addtoset. Leer más abajo la explicación.
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
