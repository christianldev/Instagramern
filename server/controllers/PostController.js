const Post = require('../models/post');
const User = require('../models/user');
const Follow = require('../models/follow');
const awsUploadImage = require('../utils/aws-upload-image');
const { v4: uuidv4 } = require('uuid');

async function publish(file, input, ctx) {
  const { id } = ctx.user;
  console.log(input);

  const { createReadStream, mimetype } = await file;

  const extension = mimetype.split('/')[1];
  const fileName = `post/${uuidv4()}.${extension}`;
  const fileData = createReadStream();

  try {
    const result = await awsUploadImage(fileData, fileName);
    const publication = new Post({
      idUser: id,
      file: result,
      typeFile: mimetype.split('/')[0],
      title: input.title,
      description: input.description,
      createAt: Date.now(),
    });

    await publication.save();

    return {
      status: true,
      urlFile: result,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      urlFile: '',
    };
  }
}

async function getPublications(username) {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  const publications = await Post.find()
    .where({
      idUser: user._id,
    })
    .sort({ createAt: -1 })
    .populate('idUser');
  return publications;
}

async function getFollowingPublications(ctx) {
  try {
    const following = await Follow.find({ idUser: ctx.user.id }).populate(
      'follow',
    );

    const followingList = [];

    for await (const data of following) {
      followingList.push(data.follow);
    }

    const publicationsList = [];

    for await (const data of followingList) {
      const publications = await Post.find()
        .where({
          idUser: data._id,
        })
        .sort({ createAt: -1 })
        .limit(5)
        .populate('idUser');
      publicationsList.push(...publications);
    }

    const result = publicationsList.sort((a, b) => {
      return new Date(b.createAt) - new Date(a.createAt);
    });

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = {
  publish,
  getPublications,
  getFollowingPublications,
};
