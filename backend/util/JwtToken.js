var jwt = require("jsonwebtoken");

const getToken = (data) => {
  return jwt.sign(
    { email: data.email, role: data.role, status: data.status, id: data.id },
    "grhfghfhdfghrth45tbrt",
    {
      expiresIn: "1day",
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, "grhfghfhdfghrth45tbrt");
};

module.exports = { getToken, verifyToken };
