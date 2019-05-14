const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

/**
 * @route   GET api/items
 * @desc    Get all items
 * @access  public
 */
router.get('/', (req, res, next) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then(items => res.json(items));
});

/**
 * @route   POST api/items
 * @desc    Create new item
 * @access  public
 */
router.post('/', (req, res, next) => {
  const newItem = new Item({
    label: req.body.label
  });

  newItem.save().then(item => res.json(item));
});

/**
 * @route   DELE api/items
 * @desc    Delete item
 * @access  public
 */
router.delete('/:id', (req, res, next) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false}))
});

module.exports = router;
