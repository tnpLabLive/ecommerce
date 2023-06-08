let connection = require("../db/config");
const CreateResponse = require("../util/CreateResponse");
const { verifyToken } = require("../util/JwtToken");

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (token) {
      const data = verifyToken(token);
      const query = "SELECT * FROM user WHERE email = ?";

      connection.query(query, data.email, (err, results) => {
        if (err) {
          CreateResponse(res, 500, null, "Please create account first", false);
        } else {
          if (results[0].status === "activate") {
            req.details = results[0];
            next();
          } else {
            CreateResponse(res, 500, null, "Your account is deactived", false);
          }
        }
      });
    } else {
      throw new Error("Your are not login");
    }
  } catch (error) {
    CreateResponse(res, 500, null, error.message, false);
  }
};

module.exports = isLoggedIn;
