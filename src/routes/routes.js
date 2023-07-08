const router = require("express").Router();
const mainController = require("../controllers/MainController");

router.get("/", mainController.send);

module.exports = router;
