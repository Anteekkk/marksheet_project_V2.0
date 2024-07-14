const express = require("express");
const router = express.Router();



router.get("/signup", (res,req)=>{
    res.redirect("signup");
});
router.post("/signup",async (req,res)=>{
    const data=new login ({
        na:req.body.name,
        pass:req.body.password
    })
    data.save();
    res.redirect("home");
});
module.exports = router;