const express = require("express");
const router = express.Router();

const {getClass,newClass} = require('../controllers/classes');

router.get("/classes" ,getClass);

router.post("/classes" ,newClass);
module.exports = router;