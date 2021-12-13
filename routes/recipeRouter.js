const express = require("express")
const recipeRouter = express.Router()
const Recipe = require('../models/recipe')

recipeRouter.route("/")
    .get((req, res, next) => {
        Recipe.find((err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })