const validateLoginFields = async (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /^(?=.{1,256})(?=.{1,64}@)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const validationEmail = emailRegex.test(email);

  if (!email || !password || !validationEmail) {
    return res.status(400).json({ message: 'Invalid fields' }); 
  }

  return next();
};

module.exports = validateLoginFields;