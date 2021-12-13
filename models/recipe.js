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
        type: String,
        required: true
    },
    directions: {
        type: String,
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
},
{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
//timestamps are wrong time, date is correct

//type
    //need list of types in enum
        //misc 
//comments

//tags? 
    // tags: { type: [String], index: true }



module.exports = mongoose.model("Recipe", recipeSchema)