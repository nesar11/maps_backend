const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const pinRoute = require("./routes/pinRoutes");
const userRoute = require("./routes/usreRoutes");
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use("/api/pins",pinRoute )
app.use("/api/users",userRoute )


app.listen(8000, ()=>{
    console.log("backend server is running")
})