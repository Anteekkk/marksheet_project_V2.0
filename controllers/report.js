const Student = require('../models/student');

async function getReport (req,res){
    res.render("getreport");
    
    // console.log(std);
//    res.render("students");
    
}

async function showReport(req,res){
    let rn=req.body.r;
    let na=req.body.n;
    let c=req.body.class;
    let s=req.body.section

    Student.find({})
    .then((data)=>{
        data.forEach(function(da){
            let ca=da.class;
            //console.log(ca);
            ca.forEach(function(d){
                let cl=d.class;
                let se=d.section;
                //console.log(da.Rno);
                //console.log(da.name);
                //console.log(rno);
                //console.log(name);
                //console.log(cl);
                //console.log(clas);    
                //console.log(s);
                //console.log(sec);
                if(da.Rno==rn && da.name==na && cl==c && se==s){
                   // console.log(c,s);
                   res.render("finalreport" , {na:da.name ,rno:da.Rno , fname:da.faname, cla:c, section:s , mark:da.marobt});

                }
                else{
                    console.log("data not found");
                }
            })
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    
}
module.exports={
    getReport,showReport
}