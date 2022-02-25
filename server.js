const express = require("express")
const app = express() 
const morgan = require("morgan")
const mongoose = require("mongoose")
const path = ('path')
const port = process.env.PORT || 9000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to DB
mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true },
    () => console.log("Connected to the database")
)

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
app.listen(port, () => {
    console.log("the server is running on Port 9000")
})