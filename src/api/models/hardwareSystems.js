const mongoose = require('mongoose')

const hardwareSystemSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    releaseYear: { type: Number, required: true },
    launchPrice: { type: Number }, // Si la variable es number no hace falta trimear.
    img: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const HardwareSystem = mongoose.model(
  'hardwareSystems',
  hardwareSystemSchema,
  'hardwareSystems'
)

module.exports = HardwareSystem
