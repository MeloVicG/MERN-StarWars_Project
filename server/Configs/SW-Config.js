const mongoose = require('mongoose');    //name of database
mongoose.connect("mongodb://localhost/sw-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the sw database!!"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


//make sure file runs? requiring this file inside of mongoose
// require("../Models/PiratesModel");