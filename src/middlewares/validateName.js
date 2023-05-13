const validateName = async (req, res, next) => {
  const { name } = req.body;
  const validation = name !== undefined && name !== '';
  
  if (validation) return next();

  return res.status(400).json({ message: '"name" is required' });
};

module.exports = validateName;