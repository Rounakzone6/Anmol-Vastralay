import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const token = jwt.verify({ email }, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
