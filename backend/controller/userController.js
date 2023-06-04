const { v4: uuidv4 } = require("uuid");
var jwt = require("jsonwebtoken");
let connection = require("../db/config");

const getUser = (req, res) => {
  const query = "SELECT * FROM user";
  connection.query(query, (err, results) => {
    if (err) {
      return res
        .status(200)
        .json({ data: null, message: err.message, status: false });
    } else {
      return res.status(200).json({ data: results, message: "", status: true });
    }
  });
};

const createUser = async (req, res) => {
  const { name, email, role, password } = req.body;
  const data = {
    id: uuidv4(),
    name,
    role,
    email,
    password,
    status: "Active",
  };

  const query = "INSERT INTO user set ?";

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).json({
        data: null,
        message: err.message,
        status: false,
      });
    } else {
      const token = jwt.sign(
        { email: data.email, role: data.role, status: data.status },
        "grhfghfhdfghrth45tbrt",
        {
          expiresIn: "1day",
        }
      );
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      
      return res
        .status(200)
        .cookie("token", token, options)
        .json({
          data: {
            email: data.email,
            role: data.role,
            status: data.status,
          },
          message: "",
          status: true,
        });
    }
  });
};

const logInUser = async (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM user WHERE email = ?";

  connection.query(query, email, (err, results) => {
    if (err) {
      return res.status(500).json({
        data: null,
        message: "Please create account first",
        status: false,
      });
    } else {
      const data = results[0];

      if (data.password === password) {
        const token = jwt.sign(
          { email: data.email, role: data.role, status: data.status },
          "grhfghfhdfghrth45tbrt",
          {
            expiresIn: "1day",
          }
        );
        const getUser = jwt.verify(token, "grhfghfhdfghrth45tbrt");
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        return res.status(200).cookie("token", token, options).json({
          data: getUser,
          message: "",
          status: true,
        });
      } else {
        return res.status(200).json({
          data: null,
          message: "password does not match",
          status: true,
        });
      }
    }
  });
};

const verifyUser = async (req, res) => {
  try {
    const getToken = req.cookies.token;

    if (getToken) {
      const getUser = jwt.verify(getToken, "grhfghfhdfghrth45tbrt");
      return res.status(200).json({
        data: getUser,
        message: "",
        status: true,
      });
    } else {
      return res.status(200).json({
        data: null,
        message: "Token not found",
        status: false,
      });
    }
  } catch (error) {
    return res.status(200).json({
      data: null,
      message: error.message,
      status: false,
    });
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
    return res.status(200).json({
      data: null,
      message: error.message,
      status: false,
    });
  }
};

module.exports = { getUser, createUser, logInUser, verifyUser, logoutUser };
