// const {v4: uuidv4}=require('uuid');
// //const cookies = require("cookies");
// const User=require("../models/user");
// const {setUser} = require("../service/auth");
// async function handleUserSignup(req,res){
//     const {name,email,password} = req.body;
//     await User.create({
//         name,
//         email,
//         password,
//     });
//     return res.redirect("/");
// }
// async function handleUserLogin(req,res){
//     const {email,password} = req.body;
//     const user = await User.findOne({email,password});
//     if(!user) return res.render('login',{
//         error:"Invalid username or Password",
//     });
//     const sessionid=uuidv4();
//     setUser(sessionid,user);
//     res.cookies('uid',sessionid);
//     return res.redirect("/");
   
// }

// module.exports={
//     handleUserSignup,handleUserLogin,
// }



//above is for statefull authentication


//below is for stateless authentication


//const {v4: uuidv4}=require('uuid');
const cookies = require('cookies');
const express=require('express');
const cookieParser=require('cookie-parser');
const User=require("../models/user");
const {setUser} = require("../service/auth");
const app=express();
app.use(cookieParser());
async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}
async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user) return res.render('login',{
        error:"Invalid username or Password",
    });
    const token=setUser(user);
    res.cookies("uid",token);
    return res.redirect("/");
   
}

module.exports={
    handleUserSignup,handleUserLogin,
}