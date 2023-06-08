const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const { getAllStore, createStore, getStoreAdmin, createStaffForStore } = require("../controller/storeController");
const router = express.Router();


router.post("/store", isLoggedIn, createStore);

router.get("/store", isLoggedIn, getStoreAdmin);
router.get("/all-store", isLoggedIn, getAllStore);
router.post("/create-store-staff", isLoggedIn, createStaffForStore);

// router.get("/get-staff", logoutUser);

module.exports = router;
