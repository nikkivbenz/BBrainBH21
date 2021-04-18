const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    studentId: {
        type: int, 
        required: "This field is required"
    }, 
    fullName: {
        type: String,
        required: "This field is required"
    }, 
    email: {
        type: String, 
        required: "This field is required"
    }, 
    //freshman, sophomore, junior, senior 
    standing: {
        type: String, 
        required: "This field is required" 

    }
});

mongoose.model("Student", studentSchema);
