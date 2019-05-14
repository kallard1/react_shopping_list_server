const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = itemSchema = mongoose.model('item', ItemSchema);
