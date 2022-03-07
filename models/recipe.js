const mongoose = require("mongoose")
const Schema = mongoose.Schema


// mongoose docs: https://mongoosejs.com/docs/guide.html

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    totalTime: {
        type: String,
        required: true
    },
    prepTime: String,
    cookTime: String,
    description: String,
    ingredients: {
        ingredient: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        }
    },
    directions: {
        type: Array,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    },
    notes: String,
    author: String,
    origin: String,
    nickname: String,
    imgUrl: String,
    servings: Number,
    calories: Number
},
{
    timestamps:{
        
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)