const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  idPublication: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post',
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

module.exports = mongoose.model('Like', likeSchema);
