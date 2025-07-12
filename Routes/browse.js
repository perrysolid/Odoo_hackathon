const express = require('express')
const router = express.Router()

// Dummy data for items
const items = [
  {
    id: '1',
    title: 'Denim Jacket',
    description: 'Classic blue jacket for winter',
    size: 'M',
    condition: 'Like New',
    tags: ['denim', 'jacket', 'blue'],
    images: [
      'https://placekitten.com/400/400',
      'https://placekitten.com/401/400',
      'https://placekitten.com/402/400',
      'https://placekitten.com/403/400',
    ]
  },
  {
    id: '2',
    title: 'Vintage Hoodie',
    description: 'Cozy and warm, perfect for chilly nights',
    size: 'L',
    condition: 'Good',
    tags: ['hoodie', 'vintage'],
    images: [
      'https://placekitten.com/420/400',
      'https://placekitten.com/421/400',
      'https://placekitten.com/422/400',
      'https://placekitten.com/423/400',
    ]
  }
]

// GET all items
router.get('/', (req, res) => {
  res.json(items.map(item => ({
    id: item.id,
    title: item.title,
    image: item.images[0], // thumbnail for browse
    size: item.size,
    condition: item.condition
  })))
})

// GET item by ID
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === req.params.id)
  if (!item) {
    return res.status(404).json({ error: 'Item not found' })
  }
  res.json(item)
})

module.exports = router
