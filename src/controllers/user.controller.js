const userService = require('../services/user.service');
const authFunctions = require('../auth/authFunctions');

const loginCheck = async (req, res) => {
  const user = await userService.loginCheck(req.body);
  
  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const token = authFunctions.createToken(user);
  return res.status(200).json({ token });
};

const create = async (req, res) => {
  const user = await userService.create(req.body);
  const { type, message, data } = user;
  if (type) return res.status(type).json({ message });

  const token = authFunctions.createToken(data);
  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();

  return res.status(200).json(users);
};

const findById = async (req, res) => {
  const id = Number(req.params.id);
  const user = await userService.findById(id);
  const { type = undefined, message = undefined } = user;

  if (type) return res.status(type).json({ message });

  return res.status(200).json(user);
};

module.exports = {
  loginCheck,
  create,
  getAll,
  findById,
};
