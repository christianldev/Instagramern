const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  file: {
    type: String,
    trim: true,
    required: true,
  },
  typeFile: {
    type: String,
    trim: true,
  },

  title: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Post', PostSchema);
