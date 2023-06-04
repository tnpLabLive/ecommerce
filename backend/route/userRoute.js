const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  logInUser,
  verifyUser,
  logoutUser,
} = require("../controller/userController");

router.get("/user", getUser);
router.post("/user", createUser);
router.post("/login", logInUser);
router.get("/me", verifyUser);
router.get("/logout", logoutUser);


module.exports = router;
