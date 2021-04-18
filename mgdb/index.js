//needs to be installed to use MongoDB
const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

//creates the links to different classLists
app.get('/', (req,res) => {
    res.send(`
        <h2> Welcome to BB </h2>
        <h3> Go to <b> <a href = "classes/list_year_one"> CECS 100's Classes</a> </b> </h3>
        <h3> Go to <b> <a href = "classes/list_year_two"> CECS 200's Classes </a> </b> </h3>
        <h3> Go to  <b> <a href = "classes/list_year_three"> CECS 300's Classes </a> </b> </h3>
        <h3> Go to <b> <a href = "classes/list_year_four"> CECS 400's Classes </a> </b> </h3>
        `);
});

app.set("views", path.join(__dirname, "/views/"));

app.engine("hbs", exphbs({
    handlebars: allowInsecurePrototypeAccess(handlebars), 
    extname: "hbs", 
    defaultLayout: "MainLayout", 
    layoutsDir: __dirname + "/views/layouts",
}));

app.set("view engine", "hbs");

app.listen(3000, () => {
    console.log("Server started at port 3000");
});