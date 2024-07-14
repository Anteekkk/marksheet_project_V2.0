const express = require("express");
const bodyparser= require("body-parser");
const cookieParser=require("cookie-parser");
const _ = require("lodash");
const ejs= require("ejs");
//const cookies=require("cookies");
const session =require('express-session');

const {connectMongoDb} = require('./connection');
const staticRouter = require("./routes/static");
const userrouter= require("./routes/user");
const studentsrouter= require("./routes/students");
const classesrouter= require("./routes/classes");
const subjectsrouter= require("./routes/subjects");
const reportrouter= require("./routes/report");
const inputrouter= require("./routes/marksip");
const signuprouter= require("./routes/signup");
const {restrictToLoggedInUserOnly}=require("./middleware/auth.js");
//const ejsLint = require("ejs-lint");
connectMongoDb("mongodb://127.0.0.1:27017/marksheet_database");

const app =express(); 
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser());
//app.use(express.static("public"));
app.use(express.static("public"));
app.use("/user",userrouter);
app.use("/",staticRouter);







const Termschema= new mongoose.Schema({
    no:Number
});









// app.get("/" , function(req,res){
//     res.render("login");
    
//     // console.log(std);
// //    res.render("students");
    
// });


// app.post("/login",async (req,res)=>{
//     try {
//         const check=await login.findOne({name:req.body.name})
//         if(check.password===req.body.password){
//             res.render("home")
//         }else{
//             res.send("wrong password")
//         }
//     }
//     catch{
//         res.send("wrong details")
//     }
//     res.redirect("/home");
// });


app.use('/',restrictToLoggedInUserOnly,inputrouter);
app.use('/students',restrictToLoggedInUserOnly,studentsrouter);
app.use('/classes',restrictToLoggedInUserOnly,classesrouter);
app.use('/subjects',restrictToLoggedInUserOnly,subjectsrouter);
app.use('/getreport',restrictToLoggedInUserOnly,reportrouter);
app.use('/signup',signuprouter);






















app.listen("3000" , function(req,res){
    console.log("server started");
});






//<%  class.forEach(function(d){  %>
//
//    <li class="list-group-item"><%= d.class %></li>
//    <li class="list-group-item"><%= d.section %></li>
//
//  <% })%>