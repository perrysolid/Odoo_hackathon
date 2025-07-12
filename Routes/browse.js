const express = require('express')
const router = express.Router()

// Dummy items for browse API
const items = [
  {
    id: '1',
    title: 'Denim Jacket',
    description: 'Classic blue jacket',
    size: 'M',
    condition: 'Like New',
    tags: ['jacket', 'denim'],
    image: 'https://placekitten.com/300/300'
  },
  {
    id: '2',
    title: 'Winter Coat',
    description: 'Warm and stylish',
    size: 'L',
    condition: 'Good',
    tags: ['coat', 'winter'],
    image: 'https://placekitten.com/300/301'
  }
]

// GET /items
router.get('/', (req, res) => {
  res.json(items)
})

module.exports = router
