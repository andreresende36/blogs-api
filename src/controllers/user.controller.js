const userService = require('../services/user.service');
const authFunctions = require('../auth/authFunctions');

const loginCheck = async (req, res) => {
  const validation = await userService.loginCheck(req.body);
  
  if (!validation) return res.status(400).json({ message: 'Invalid fields' });

  const token = authFunctions.createToken(req.body);
  return res.status(200).json({ token });
};

const create = async (req, res) => {
  const user = await userService.create(req.body);
  const { type, message, data } = user;
  if (type) return res.status(type).json({ message });

  const token = authFunctions.createToken(data);
  return res.status(201).json({ token });
};

module.exports = {
  loginCheck,
  create,
};
