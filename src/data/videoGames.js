const videoGames = [
  {
    title: 'The Legend of Zelda: Breath of the Wild',
    company: 'Nintendo',
    pegi: '12',
    price: 59.99,
    category: ['Adventure', 'RPG'],
    platform: ['Switch'],
    img: 'https://example.com/zelda.jpg'
  },
  {
    title: 'God of War Ragnarok',
    company: 'Santa Monica Studio',
    pegi: '18',
    price: 69.99,
    category: ['Action', 'Adventure'],
    platform: ['PS5'],
    img: 'https://example.com/gow.jpg'
  },
  {
    title: 'Halo Infinite',
    company: '343 Industries',
    pegi: '16',
    price: 59.99,
    category: ['Shooter', 'Sci-Fi'],
    platform: ['Xbox', 'PC'],
    img: 'https://example.com/halo.jpg'
  },
  {
    title: 'Elden Ring',
    company: 'FromSoftware',
    pegi: '18',
    price: 69.99,
    category: ['RPG', 'Fantasy'],
    platform: ['PS5', 'Xbox', 'PC'],
    img: 'https://example.com/eldenring.jpg'
  },
  {
    title: 'Super Mario Odyssey',
    company: 'Nintendo',
    pegi: '7',
    price: 49.99,
    category: ['Platformer', 'Adventure'],
    platform: ['Switch'],
    img: 'https://example.com/mario.jpg'
  },
  {
    title: 'Red Dead Redemption 2',
    company: 'Rockstar Games',
    pegi: '18',
    price: 59.99,
    category: ['Adventure', 'Open World'],
    platform: ['PS4', 'Xbox', 'PC'],
    img: 'https://example.com/rdr2.jpg'
  },
  {
    title: 'Minecraft',
    company: 'Mojang',
    pegi: '7',
    price: 29.99,
    category: ['Sandbox', 'Survival'],
    platform: ['PS4', 'Xbox', 'PC', 'Switch'],
    img: 'https://example.com/minecraft.jpg'
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    company: 'CD Projekt Red',
    pegi: '18',
    price: 39.99,
    category: ['RPG', 'Adventure'],
    platform: ['PS4', 'Xbox', 'PC', 'Switch'],
    img: 'https://example.com/witcher3.jpg'
  },
  {
    title: 'FIFA 23',
    company: 'EA Sports',
    pegi: '3',
    price: 59.99,
    category: ['Sports'],
    platform: ['PS5', 'Xbox', 'PC', 'Switch'],
    img: 'https://example.com/fifa23.jpg'
  },
  {
    title: 'Call of Duty: Modern Warfare II',
    company: 'Infinity Ward',
    pegi: '18',
    price: 69.99,
    category: ['Shooter', 'Action'],
    platform: ['PS5', 'Xbox', 'PC'],
    img: 'https://example.com/codmw2.jpg'
  },
  {
    title: 'Animal Crossing: New Horizons',
    company: 'Nintendo',
    pegi: '3',
    price: 49.99,
    category: ['Simulation', 'Social'],
    platform: ['Switch'],
    img: 'https://example.com/animalcrossing.jpg'
  },
  {
    title: 'Fortnite',
    company: 'Epic Games',
    pegi: '12',
    price: 0.0,
    category: ['Shooter', 'Battle Royale'],
    platform: ['PS5', 'Xbox', 'PC', 'Switch'],
    img: 'https://example.com/fortnite.jpg'
  },
  {
    title: 'Cyberpunk 2077',
    company: 'CD Projekt Red',
    pegi: '18',
    price: 59.99,
    category: ['RPG', 'Sci-Fi'],
    platform: ['PS5', 'Xbox', 'PC'],
    img: 'https://example.com/cyberpunk2077.jpg'
  },
  {
    title: 'Overwatch 2',
    company: 'Blizzard Entertainment',
    pegi: '12',
    price: 0.0,
    category: ['Shooter', 'Team-Based'],
    platform: ['PS5', 'Xbox', 'PC', 'Switch'],
    img: 'https://example.com/overwatch2.jpg'
  },
  {
    title: 'League of Legends',
    company: 'Riot Games',
    pegi: '12',
    price: 0.0,
    category: ['MOBA'],
    platform: ['PC'],
    img: 'https://example.com/lol.jpg'
  },
  {
    title: 'Counter-Strike 2',
    company: 'Valve',
    pegi: '18',
    price: 0.0,
    category: ['Shooter', 'Competitive'],
    platform: ['PC'],
    img: 'https://example.com/cs2.jpg'
  },
  {
    title: 'Street Fighter 6',
    company: 'Capcom',
    pegi: '12',
    price: 59.99,
    category: ['Fighting'],
    platform: ['PS5', 'Xbox', 'PC'],
    img: 'https://example.com/sf6.jpg'
  },
  {
    title: 'Gran Turismo 7',
    company: 'Polyphony Digital',
    pegi: '3',
    price: 69.99,
    category: ['Racing', 'Simulation'],
    platform: ['PS5'],
    img: 'https://example.com/gt7.jpg'
  },
  {
    title: 'Dark Souls III',
    company: 'FromSoftware',
    pegi: '16',
    price: 49.99,
    category: ['RPG', 'Fantasy'],
    platform: ['PS4', 'Xbox', 'PC'],
    img: 'https://example.com/ds3.jpg'
  },
  {
    title: 'Splatoon 3',
    company: 'Nintendo',
    pegi: '7',
    price: 59.99,
    category: ['Shooter', 'Multiplayer'],
    platform: ['Switch'],
    img: 'https://example.com/splatoon3.jpg'
  }
]

module.exports = videoGames
