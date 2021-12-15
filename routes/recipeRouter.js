const express = require("express")
const recipeRouter = express.Router()
const Recipe = require('../models/recipe')


//Routes
//("/") Routes
recipeRouter.route("/")
    .get((req, res, next) => {
        Recipe.find((err, recipes) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(recipes)
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

    //GET Featured
//("/featured")
//incorrect path
recipeRouter.route('/featured') 
    .get((req, res, next) => {
        Recipe.findOne({featured: true},
            (err, recipe) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(recipe)
            })
    })

// { name: {$regex: searchText, $options: 'i'}

recipeRouter.get("/search",
(req, res, next) => {
const { search } = req.query
const searchText = new RegExp(search)
Recipe.find({
          $or: [
           { name: {
             $regex: searchText,
             $options: 'i'
           }},
           { nickname: {
             $regex: searchText,
             $options: 'i'
           }},
           { author: {
             $regex: searchText,
             $options: 'i'
           }},
           { type: {
             $regex: searchText,
             $options: 'i'
           }},
           { origin: {
             $regex: searchText,
             $options: 'i'
           }}
          ]},
      (err, recipes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(recipes)
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
    //deleteOne



    module.exports = recipeRouter

