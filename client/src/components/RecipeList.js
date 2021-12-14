import React, {useContext} from 'react'
import{Context} from '../Context'


function RecipeList(props) {

    const {recipesList} = useContext(Context)

    return (
        <ul>
            {recipesList ? recipesList.map(recipe => 
            <li recipe={recipe} key={recipe._id}>{recipe.name}</li>) : null }
        </ul>
        
    )
}

export default RecipeList
