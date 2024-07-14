const express = require("express");
const router = express.Router();
const {getSubject,newSubject} =require('../controllers/subjects');


router.get("/subjects" , getSubject);
router.post("/subjects" , newSubject);
export default router;