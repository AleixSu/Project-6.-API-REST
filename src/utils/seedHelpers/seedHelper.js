const videoGames = require('../../data/videoGames')

const videoGameSeed = []

const switch_ID = '68d6ee0786b5936851d7cf22'
const ps4_ID = '68d6ee0786b5936851d7cf20'
const ps5_ID = '68d6ee0786b5936851d7cf1f'
const xbox_ID = '68d6ee0786b5936851d7cf21'
const pc_ID = '68d6ee0786b5936851d7cf23'

for (const videogame of videoGames) {
  videogame.platform = videogame.platform.map((p) => {
    if (p === 'Switch') return switch_ID
    if (p === 'PS4') return ps4_ID
    if (p === 'PS5') return ps5_ID
    if (p === 'Xbox') return xbox_ID
    if (p === 'PC') return pc_ID
    return p
  })
  videoGameSeed.push(videogame)
  console.log(videoGameSeed)
}
module.exports = videoGameSeed
