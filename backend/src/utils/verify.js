const jwt = require("jsonwebtoken");
const secretJWTKey = "sk_test_51MC0eOSAWesH71sJ04M4v0xaz0YBxC3JNFGdbj0MIqZt2ToPdfaIEE6ZIxgpPBpVoZ4HFGuCJWOCtV0Yiu6iJGLL003i3guBZn";

const verifyUser = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1]; // token : "Bearer #tokenvalue"
  try {
    jwt.verify(token, secretJWTKey);
    next();
  } catch (err) {
    res.status(401).json({ message: "Unathorized request" });
  }
};

const verifyAdmin = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1]; // token : "Bearer #tokenvalue"
  try {
    const decoded = jwt.verify(token, secretJWTKey);
    if (decoded.isAdmin) {
      next();
    } else {
      res.status(401).json({ message: "User is not Admin" });
    }
  } catch (err) {
    res.status(401).json({ message: "Unathorized request" });
  }
};

exports.secretJWTKey = secretJWTKey;
exports.verifyUser = verifyUser;
exports.verifyAdmin = verifyAdmin;
