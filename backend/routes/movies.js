const express = require("express");
const router = express.Router();
const movieController = require("../src/controller/cinemaMovie");
const { verifyAdmin, verifyUser } = require("../src/utils/verify");

/* GET movie operations. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add", verifyAdmin, movieController.addM);
router.put("/update", verifyAdmin, movieController.updateMovie);
router.delete("/delete", verifyAdmin, movieController.deleteMovie);
router.get("/search", verifyUser, movieController.searchMovie);
router.get("/listallmovie", movieController.listallMovie);
router.get("/specificMovie", movieController.specificMovie);

module.exports = router;
