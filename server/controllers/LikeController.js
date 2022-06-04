const Like = require('../models/like');
const Post = require('../models/post');

async function addLike(idPublication, ctx, pubsub) {
  try {
    const like = new Like({
      idPublication,
      idUser: ctx.user.id,
    });
    if (like) {
      await like.save();
      const publication = await Post.findById(idPublication);
      pubsub.publish('LIKE_ADDED', { likeAdded: publication });
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addLike,
};
