import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider(props) {
//state
    const [featuredRecipe, setFeaturedRecipe] = useState({})
    const [recipesList, setRecipesList] = useState([])



//functions    
    useEffect(() => {
        getFeaturedRecipe()
    }, [])

    

//axios requests
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
    function deleteBounty(recipeId){
        axios.delete(`/recipes/${recipeId}` )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <Context.Provider
            value={{
                featuredRecipe,
                recipesList,
                submitRecipe
            }}
        > 
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
