const { v4: uuidv4 } = require("uuid");
let connection = require("../db/config");
const { getToken, verifyToken } = require("../util/JwtToken");
const CookieToken = require("../util/cookieToken");
const CreateResponse = require("../util/CreateResponse");

const getUser = (req, res) => {
  const query = "SELECT * FROM user";
  connection.query(query, (err, results) => {
    if (err) {
      return CreateResponse(res, 500, null, err.message, false);
    } else {
      return CreateResponse(res, 200, results, "", true);
    }
  });
};

const createUser = async (req, res) => {
  const { name, email, role, password } = req.body;
  const data = {
    id: uuidv4(),
    name,
    email,
    role,
    password,
    status: "activate",
    business_id: role === "admin" ? uuidv4() : null,
  };

  const query = "INSERT INTO user set ?";

  connection.query(query, data, (err) => {
    if (err) {
      return CreateResponse(res, 500, null, err.message, false);
    } else {
      const token = getToken(data);
      return CookieToken(res, token, data);
    }
  });
};

// staff and user
const deactivateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedItem = { status: "deactivate" };
  const query = "UPDATE user SET ? WHERE id = ?";
  connection.query(query, [updatedItem, userId], (err, results) => {
    if (err) {
      CreateResponse(res, 500, null, err.message, false);
    } else {
      CreateResponse(res, 500, results, "", false);
    }
  });
};

const logInUser = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM user WHERE email = ?";

  connection.query(query, email, (err, results) => {
    if (err) {
      CreateResponse(res, 500, null, err.message, false);
    } else {
      const data = results[0];
      if (data) {
        if (data.password === password) {
          const token = getToken(data);
          const getUser = verifyToken(token);
          CookieToken(res, token, getUser);
        } else {
          CreateResponse(res, 401, null, "Password does not matched", false);
        }
      } else {
        CreateResponse(res, 401, null, "Please create account first", false);
      }
    }
  });
};

// checking token present or not, if token present then give information about Loggedin persion
const verifyUser = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (token) {
      const getUser = verifyToken(token);
      const query = "SELECT * FROM user WHERE email = ?";
      connection.query(query, getUser.email, (err, results) => {
        if (err) {
          return CreateResponse(res, 500, null, err.message, false);
        } else {
          if (results.length !== 0) {
            return CreateResponse(res, 200, getUser, "", true);
          } else {
            return CreateResponse(
              res,
              500,
              null,
              "Please create account first",
              true
            );
          }
        }
      });
    } else {
      throw new Error("You are not logged in");
    }
  } catch (error) {
    return CreateResponse(res, 200, getUser, error.message, false);
  }
};

const logoutUser = async (req, res) => {
  try {
    return res.status(200).clearCookie("token").json({
      data: null,
      message: "Logout successful",
      status: true,
    });
  } catch (error) {
    return CreateResponse(res, 500, null, error.message, false);
  }
};

module.exports = {
  getUser,
  createUser,
  logInUser,
  verifyUser,
  logoutUser,
  deactivateUser,
};
