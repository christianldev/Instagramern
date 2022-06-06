const Like = require('../models/like');
const Post = require('../models/post');

async function addLike(idPublication, ctx, pubsub) {
  try {
    const like = new Like({
      idPublication,
      idUser: ctx.user.id,
    });
    //find the user that is being liked
    const post = await Post.findById(idPublication).populate('idUser');

    // if like is already added
    const likeFound = await Like.find({
      idPublication,
      idUser: ctx.user.id,
    })
      .where('idPublication')
      .equals(idPublication);

    if (likeFound.length > 0) {
      throw new Error('Ya has dado like a esta publicacion');
    }

    await like.save();

    // publish the new like
    pubsub.publish('LIKE_ADDED', { likeAdded: post });

    return true;
  } catch (err) {
    console.log(err);
  }
}

async function removeLike(idPublication, ctx, pubsub) {
  try {
    const like = await Like.findOne({
      idPublication,
      idUser: ctx.user.id,
    });
    if (!like) {
      throw new Error('No has dado like a esta publicacion');
    }
    const post = await Post.findById(idPublication).populate('idUser');

    await like.remove();

    // publish the new like
    pubsub.publish('LIKE_REMOVED', { likeRemoved: post });

    return true;
  } catch (err) {
    console.log(err);
  }
}

async function getCountLikes(idPublication) {
  try {
    const likes = await Like.countDocuments({
      idPublication,
    });
    return likes;
  } catch (err) {
    console.log(err);
  }
}

async function isLike(idPublication, ctx) {
  try {
    const like = await Like.findOne({
      idPublication,
    }).where({ idUser: ctx.user.id });
    if (!like) {
      throw new Error('No has dado like a esta publicacion');
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  addLike,
  removeLike,
  getCountLikes,
  isLike,
};
