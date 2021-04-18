const express = require("express"); 
var router = express.Router();
const mongoose = require("mongodb");
const Student = mongoose.model("Student");

router.get("/", (req, res) => {
    res.render("student/addOrEdit", {
        viewTitle: 'Insert Student'
    } )
})


//create a new user 
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(), 
        name: req.body.name, 
        email: req.body.email
    }

    if(!newUser.name || !newUser.email){
        return res.sendStatus(400)
    }

    users.push(newUser)
    res.json(users)
})


//update users
router.put('/:id', (req, res) =>{
    const found = users.some(user => user.id === parseInt(req.params.id))
    
    if (found) {
        const updateUser = req.body;
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name: user.name
                user.email = updateUser.email ? updateUser.email: user.email
                res.json({msg: 'User Updated', user})
            }
        })
    }
})