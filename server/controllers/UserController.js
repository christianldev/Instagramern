const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//generate token
function generateToken(user, SECRET_KEY, expiresIn) {
  const { id, name, username, email } = user;
  const payload = {
    id,
    name,
    username,
    email,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
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

  return { token: generateToken(userFound, process.env.SECRET_KEY, '24h') };
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

module.exports = {
  register,
  login,
  getUser,
};
