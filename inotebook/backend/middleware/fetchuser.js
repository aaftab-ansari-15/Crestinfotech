const jwt = require("jsonwebtoken");
const JWT_SEC = "good$times";
const fetchuser = (req, res, next) => {
  //get the user from jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SEC);
    req.user = data;

    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using valid token" });
  }
};

module.exports = fetchuser;
