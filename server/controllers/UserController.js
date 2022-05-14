const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const awsUploadImage = require('../utils/aws-upload-image');
require('dotenv').config({ path: '../.env' });

async function refreshToken(req) {
  try {
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
      const decoded = jwt.verify(token, process.env.APP_REFRESH_TOKEN);
      console.log(decoded);
      let user = await User.findById(decoded.id);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      let tokens = await issueToken(user);
      return { ...tokens, user };
    }
  } catch (err) {
    throw new Error('No se pudo renovar el token');
  }
}

async function issueToken(user) {
  let token = 'Bearer ' + (await generateToken(user));
  let refreshToken = await generateToken(user, '24h');
  return { token, refreshToken };
}

//generate token
async function generateToken(user, expiresIn = '24h') {
  const { id, name, username, email } = user;
  const payload = {
    id,
    name,
    username,
    email,
  };

  const token =
    expiresIn === '24h'
      ? process.env.SECRET_KEY
      : process.env.SECRET_REFRESH_TOKEN;

  return await jwt.sign(payload, token, { expiresIn });
}
// Regster user
async function register(input) {
  const newUser = input;

  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();

  const { email, username, password } = newUser;

  // Revisar si el email ya existe
  const foundEmail = await User.findOne({ email });
  // Revisar si el username ya existe
  const foundUsername = await User.findOne({ username });
  if (foundEmail) {
    throw new Error('El email ya existe');
  }

  if (foundUsername) {
    throw new Error('El usuario ya existe');
  }

  //Encriptar password
  const salt = await bcrypt.genSaltSync(10);
  newUser.password = await bcrypt.hashSync(password, salt);

  try {
    const user = new User(newUser);
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
}

// Login user

async function login(input) {
  const { email, password } = input;
  const userFound = await User.findOne({ email: email.toLowerCase() });
  if (!userFound) {
    throw new Error('Email o contraseña incorrectos');
  }

  const passwordSuccess = await bcrypt.compare(password, userFound.password);
  if (!passwordSuccess) {
    throw new Error('Email o contraseña incorrectos');
  }

  const tokens = await issueToken(userFound);

  return { ...tokens, user: userFound };
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
  refreshToken,
  getUser,
  updateAvatar,
  deleteAvatar,
  updateUser,
  searchUsers,
};
