const express = require("express");
const router = express.Router();
const userController = require("../src/controller/cinemaBooking");
const { verifyUser } = require("../src/utils/verify");

/* GET booking details. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/input", verifyUser, userController.MBooking);
router.get("/history", verifyUser, userController.Bookinghistory);
router.get("/eticket", verifyUser, userController.eticket);

module.exports = router;
