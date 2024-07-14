const express = require("express");
const router = express.Router();
const {getReport,showReport}= require('../controllers/report');
router.get("/getreport" , getReport);
router.post("/getreport" ,showReport);
module.exports = router;