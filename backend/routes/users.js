const express = require("express");
const router = express.Router();
const userController = require("../src/controller/cinemaUser");
const { verifyAdmin } = require("../src/utils/verify");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", userController.userRegistration);
router.post("/login", userController.userSignin);
router.get("/list-users", verifyAdmin, userController.listallUsers);

module.exports = router;
