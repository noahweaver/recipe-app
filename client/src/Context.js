import React, {useState, useEffect} from 'react'

import axios from 'axios'
const Context = React.createContext()


function ContextProvider(props) {
//state
    const [featuredRecipe, setFeaturedRecipe] = useState({})
    const [recipesList, setRecipesList] = useState([])
    const [searchField, setSearchField] = useState({search: ""})


//functions    
    useEffect(() => {
        getFeaturedRecipe()
        getRecipes()
    }, [])


//axios requests
    function getRecipes(){
        axios.get('/recipes')
            .then(res => {
                setRecipesList(res.data)
            })
            .catch(err => console.log(err))
    }
    function getFeaturedRecipe(){
        axios.get('/recipes/featured')
            .then(res => setFeaturedRecipe(res.data))
            .catch(err => console.log(err))
    }
    function submitRecipe(newRecipe){
        console.log("submit recipe was called")
        axios.post('/recipes', newRecipe)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    function deleteRecipe(recipeId){
        axios.delete(`/recipes/${recipeId}` )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //GET using search criteria in route
    function getSearchedRecipes(){
        axios.get(`/recipes/search?search=${searchField.search}`)
            .then(res => {
                setRecipesList(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <Context.Provider
            value={{
                featuredRecipe,
                recipesList,
                submitRecipe,
                searchField,
                setSearchField,
                getSearchedRecipes
            }}
        > 
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
