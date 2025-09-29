const mongoose = require('mongoose')

const hardwareSystemSchema = mongoose.Schema(
  {
    name: { type: String, require: true, trim: true },
    company: { type: String, require: true, trim: true },
    releaseYear: { type: Number, require: true, trim: true },
    launchPrice: { type: Number, require: true, trim: true },
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
