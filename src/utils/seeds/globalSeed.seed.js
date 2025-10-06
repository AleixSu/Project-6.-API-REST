require('dotenv').config()
const mongoose = require('mongoose')
const seedHelper = require('../seedHelpers/seedHelper')
const { hardwareArray, videogameArray } = require('../../data/globalData')

const launchSeed = async (array1, array2) => {
  try {
    console.log('Connection in process...')
    await mongoose.connect(process.env.DB2_URL)
    console.log('Database connection established')

    await array1.model.deleteMany({}) // Apuntes abajo.
    console.log('Old videogames collection removed from database')
    const insertedSystems = await array1.model.insertMany(array1.array)

    console.log(`${array1.name} succesfully seeded`)

    await array2.model.collection.drop()
    console.log('Old hardwardSystems collection removed from database')
    await array2.model.insertMany(seedHelper(insertedSystems))
    console.log(`${array2.name} succesfully seeded`)
  } catch (error) {
    console.log('Failed to connect to Database:' + error)
  } finally {
    // finally se reproduce al final pase lo que pase
    await mongoose.disconnect()
    console.log('Database connection closed')
  }
}

launchSeed(hardwareArray, videogameArray)

//!DROP() VS DELETEMANY({})
//?DROP
//* Elimina TODA la colección de la base de datos(estructura incluida).
//* Útil cuando quieres reiniciar completamente uan colección.
//* Sintáxis:
//                     await Model.collection.drop()
//* Ventajas:
// Es más rápido que deleteMany() si la colección es grande
// Útil cuando quieres reiniciar copmletamente una colección o lanzar un seed inicial.
//* Desventajas:
// Pierde los índices, validaciones o configuraciones especiales
// Si otro proceso intenta acceder la colección mientras eliminas.
// o mantiene relaciones ni _id's previos
//* Cuando usarlos:
// En scripts de seed inicial
// Entornos de desarrollo o testing cuando quieres resetaer todo
// Nunca usarlo en producción

//? DELETEMANY({})
//* Elimina todos los documentos dentro de la colección, pero deja la colección intacta.
//* Es decir, la estructura, índices y validaciones se mantienenen
//* Sintáxis:
//                        await Model.deleteMany({})
//* Ventajas:
// Preserva la estructura y los índices, no tienes que reconstruir nada.
// Evita errores de concurrencia: otros procesos pueden seguir usando la colección
// Si hay relaciones (por ejemplo, ObjectId referenciados enotros modelos), los _id antiguos pueden reutilzarse o mantenerse si ahces lógica personalizada.
//* Desventajas:
// Un poco mas lento que drop() con colecciones muy grandes, porque eleimina docuento a documento.
// No elimina índices, así que si necesitas cambiar estructura, no te sirve
//* Cuando usarlos:
// En scripts de reseed o actualización parcial donde solo quieres limpiar los datos pero mantener la estructura.
// En entornos de producción controlada, donde no puedes destruir la colección
// Cuando las relaciones (ObjectId) deben mantenerse estables.
