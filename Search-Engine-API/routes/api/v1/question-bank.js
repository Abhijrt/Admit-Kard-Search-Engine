// importing the express
const express = require("express");

// taking the router form the express server
const router = express.Router();

// fetching the question controller
const qBankController = require("../../../controllers/api/v1/qbank_controller");

// calling the add-question  controller
router.post("/add-question", qBankController.addQuestion);
// calling the search controller
router.post("/search", qBankController.search);
// exporting the router to be used in different module or files
module.exports = router;
