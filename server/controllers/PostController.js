const Post = require('../models/post');
const awsUploadImage = require('../utils/aws-upload-image');
const { v4: uuidv4 } = require('uuid');
const { now } = require('mongoose');

async function publish(file, ctx) {
  const { id } = ctx.user;

  const { createReadStream, mimetype } = await file;

  const extension = mimetype.split('/')[1];
  const fileName = `post/${uuidv4()}.${extension}`;
  const fileData = createReadStream();

  try {
    const result = await awsUploadImage(fileData, fileName);
    const publication = new Post({
      idUser: id,
      file: result,
      fileName: mimetype.split('/')[0],
      createAt: Date.now(),
    });

    await publication.save();

    return {
      status: true,
      urlFile: result,
    };
  } catch (error) {
    return {
      status: false,
      urlFile: '',
    };
  }
}

module.exports = {
  publish,
};
