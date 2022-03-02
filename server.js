const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const path = require('path')


//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Connect to DB
mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}, 
        (err) => {
            if(err){
                console.log(err)
            } else {
                console.log("Connected to the Database")
            }
        }
);

//Routes
app.use("/recipes", require("./routes/recipeRouter.js"))

//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({err: err.message})
})

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Listen
app.listen((process.env.PORT || 9000), () => {
    console.log("the server is running")
})