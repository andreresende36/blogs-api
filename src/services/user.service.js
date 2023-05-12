const { User } = require('../models');

const loginCheck = async ({ email, password }) => {
  const users = await User.findAll();
  
  const validation = users.some((user) => user.email === email 
  && user.password === password);
  return validation;
};

module.exports = {
  loginCheck,
};