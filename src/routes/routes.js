const router = require("express").Router();
const mainController = require("../controllers/MainController");

router.get("/yt", mainController.send);

module.exports = router;
