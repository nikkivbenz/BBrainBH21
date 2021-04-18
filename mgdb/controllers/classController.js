const express = require("express"); 
var router = express.Router();
const mongoose = require("mongodb");
const Student = mongoose.model("Class");


router.get("/", (req, res) => {
    res.render("class/add", {
        viewTitle: 'Add New Class',
    });
});

//still have to add remove class
router.post("/", (req, res) => {
    if(req.body._id == ""){
        addClass(req,res);
    } else {
        removeClass(req, res);
    }
});

function addClass(req, res) {

    var newClass = new CsClass(); 
    newClass.courseNumber = req.body.courseNumber; 
    newClass.courseName = req.body.courseName; 
    newClass.level = req.body.level; 

    
    newClass.save((err, doc) => {
        if (!err) {
            res.redirect("csclass/list");
        } else {
            console.log("Error occured while inserting a new class:" + err);
        }
    });
};
//didn't include updating a class at this moment in time

router.get("/list", (req, res) => {
    CsClass.find((err, doc) => {
        if (!err) {
            res.render('csclass/list', {
                list:docs
            });
        } else {
            console.log("Error in retreiving list of classes" + err); 
        }
    });
});