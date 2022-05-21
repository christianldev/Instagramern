const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const awsUploadImage = require('../utils/aws-upload-image');
require('dotenv').config({ path: '../.env' });

function createToken(user, SECRET_KEY, expiresIn) {
  const { id, name, email, username } = user;
  const payload = {
    id,
    name,
    email,
    username,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}
// Regster user
async function register(input) {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();

  const { email, username, password } = newUser;

  // Revisamos si el email esta en uso
  const foundEmail = await User.findOne({ email });
  if (foundEmail) throw new Error('El email ya esta en uso');

  // Revisamos si el username esta en uso
  const foundUsername = await User.findOne({ username });
  if (foundUsername) throw new Error('El nombre de usuario ya esta en uso');

  // Encriptar
  const salt = await bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);

  try {
    const user = new User(newUser);
    user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
}

// Login user

async function login(input) {
  const { email, password } = input;

  const userFound = await User.findOne({ email: email.toLowerCase() });
  if (!userFound) throw new Error('Error en el email o contraseña');

  const passwordSucess = await bcryptjs.compare(password, userFound.password);
  if (!passwordSucess) throw new Error('Error en el email o contraseña');

  return {
    token: createToken(userFound, process.env.SECRET_KEY, '24h'),
  };
}

async function getUser(id, username) {
  let user = null;
  if (id) {
    user = await User.findById(id);
    user.password = undefined;
  } else if (username) {
    user = await User.findOne({ username: username });
    user.password = undefined;
  }
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  return user;
}

async function updateAvatar(file, ctx) {
  const { id } = ctx.user;
  const { createReadStream, mimetype } = await file;
  const extension = mimetype.split('/')[1];
  const imageName = `avatar/${id}.${extension}`;
  const fileData = createReadStream();

  try {
    const result = await awsUploadImage(fileData, imageName);
    await User.findByIdAndUpdate(id, { avatar: result });
    return {
      status: true,
      urlAvatar: result,
    };
  } catch (error) {
    return {
      status: false,
      urlAvatar: null,
    };
  }
}

async function deleteAvatar(ctx) {
  const { id } = ctx.user;
  try {
    await User.findByIdAndUpdate(id, { avatar: '' });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function updateUser(input, ctx) {
  const { id } = ctx.user;
  const { currentPassword, newPassword } = input;
  try {
    if (currentPassword && newPassword) {
      const userFound = await User.findById(id);
      const passwordSuccess = await bcrypt.compare(
        currentPassword,
        userFound.password,
      );
      if (!passwordSuccess) {
        throw new Error('Contraseña incorrecta');
      }

      const salt = await bcrypt.genSaltSync(10);
      const newPasswordEncrypted = await bcrypt.hash(newPassword, salt);
      await User.findByIdAndUpdate(id, { password: newPasswordEncrypted });
    } else {
      await User.findByIdAndUpdate(id, input);
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function searchUsers(search) {
  // search by name or username
  const users = await User.find({
    $or: [
      { name: { $regex: search, $options: 'i' } },
      { username: { $regex: search, $options: 'i' } },
    ],
  }).limit(10);

  return users;
}

module.exports = {
  register,
  login,
  getUser,
  updateAvatar,
  deleteAvatar,
  updateUser,
  searchUsers,
};
