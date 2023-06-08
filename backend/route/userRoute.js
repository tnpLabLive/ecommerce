const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  logInUser,
  verifyUser,
  logoutUser,
  deactivateUser,
} = require("../controller/userController");

router.get("/user", getUser);
router.post("/user", createUser);
router.post("/login", logInUser);

router.get("/me", verifyUser);

router.get("/logout", logoutUser);

// staff and user
router.get("/staff-deactivate/:id", deactivateUser);



module.exports = router;
