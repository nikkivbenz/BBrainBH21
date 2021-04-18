const mongoose = require("mongoose");

var classSchema= new mongoose.Schema({
    courseNumber: {
        type: int, 
        required: "This field is required"
    }, 
    courseName: {
        type: String,
        required: "This field is required"
    }, 
    //100, 200, 300, 400
    level: {
        type: int, 
        required: "This field is required"
    }
});

mongoose.model("CsClass", classSchema);
