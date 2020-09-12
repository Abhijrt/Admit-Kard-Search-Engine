// importing the express
const express = require("express");

// taking the router form the express server
const router = express.Router();

// fetching the home controller
const homeController = require("../../../controllers/api/v1/home_controller");

// calling the home controller
router.get("/", homeController.home);
router.use("/qbank", require("./question-bank"));

// exporting the router to be used in different module or files
module.exports = router;
