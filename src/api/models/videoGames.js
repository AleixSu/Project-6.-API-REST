const mongoose = require('mongoose')

const videogameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    pegi: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: [
      {
        type: String,
        enum: [
          'Adventure',
          'Action',
          'RPG',
          'Fantasy',
          'Shooter',
          'Sci-Fi',
          'Platformer',
          'Open World',
          'Sandbox',
          'Survival',
          'Sports',
          'Simulation',
          'Social',
          'Battle Royale',
          'Team-Based',
          'MOBA',
          'Competitive',
          'Fighting',
          'Racing',
          'Multiplayer'
        ]
      }
    ],
    platform: [{ type: mongoose.Types.ObjectId, ref: 'hardwareSystems' }],
    img: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const VideoGame = mongoose.model('videogames', videogameSchema, 'videogames')

module.exports = VideoGame
