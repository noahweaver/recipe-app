const express = require("express")
const recipeRouter = express.Router()
const Recipe = require('../models/recipe')


//Routes
//("/") Routes
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
    .post((req, res, next) => {
        const newRecipe = new Recipe(req.body)
        newRecipe.save((err, savedRecipe) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedRecipe)
        })
    })

//("/:recipeId") Routes
recipeRouter.route("/:recipeId")
    .get((req, res, next) => {
        Recipe.find({_id: req.params.recipeId},
            (err, recipe) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(recipe)
        })
    })
    .put((req, res, next) => {
        Recipe.findOneAndUpdate({_id: req.params.recipeId},
            req.body,
            {new: true},
            (err, updatedRecipe) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedRecipe)
            })
    })

    module.exports = recipeRouter

