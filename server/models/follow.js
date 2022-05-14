const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  follow: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  cretedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Follow', FollowSchema);
