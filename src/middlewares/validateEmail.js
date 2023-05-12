const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^(?=.{1,256})(?=.{1,64}@)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  return next();
};

module.exports = validateEmail;