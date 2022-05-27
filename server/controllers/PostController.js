const Post = require('../models/post');

async function publish(file, ctx) {
  const { createReadStream, filename } = await file;
  const stream = createReadStream();
  const { id } = ctx.user;
  const post = new Post({
    user: id,
    file: {
      filename,
      stream,
    },
  });
  await post.save();
  return { status: true, urlFile: `${process.env.URL_API}/post/${post._id}` };
}

module.exports = {
  publish,
};
