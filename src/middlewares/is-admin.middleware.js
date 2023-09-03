const {CustomError} = require("../utils/custom-error");

const isAdmin = async (req, res, next) => {
  try {
    const {user} = req;
    if (!user.isAdmin) throw new CustomError("Permission denied", 403);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {isAdmin};
