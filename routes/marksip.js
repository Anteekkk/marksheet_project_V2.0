const express = require("express");
const router = express.Router();
const {enterMarks} = require('../controllers/marksip');
router.post("/" ,enterMarks);
module.exports = router;
