const { User } = require('../models');

const loginCheck = async ({ email, password }) => {
  const users = await User.findAll();
  
  const validation = users.some((user) => user.email === email 
  && user.password === password);
  return validation;
};

const create = async ({ displayName, email, password, image = '' }) => {
  const users = await User.findAll();

  const emailNotUnique = users.some((user) => user.email === email);

  if (emailNotUnique) return { type: 409, message: 'User already registered', data: null };

  const { dataValues } = await User.create({ displayName, email, password, image });
  return { type: null, message: 'OK', data: dataValues };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return users;
};

module.exports = {
  loginCheck,
  create,
  getAll,
};