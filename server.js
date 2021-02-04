const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 8200;


//to properly receive and understand json data 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//the server talks to these files
require("./server/Configs/SW-Config" )
require("./server/Routes/SW-Route")(app);

app.listen(PORT, () => console.log(`app running on port : ${PORT}`))



