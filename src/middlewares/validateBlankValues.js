const validateBlankValues = async (req, res, next) => {
  const { body } = req;
  const validation = Object.values(body).every((value) => value !== undefined && value !== '');
  
  if (validation) return next();

  return res.status(400).json({ message: 'Some required fields are missing' });
};

module.exports = validateBlankValues;