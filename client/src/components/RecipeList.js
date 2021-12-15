import React, {useContext} from 'react'
import{Context} from '../Context'
import {useNavigate} from 'react-router-dom'


function RecipeList(props) {
    const navigate = useNavigate()
    const {recipesList} = useContext(Context)

    return (
        <ul>
            {recipesList ? recipesList.map(recipe => 
            <li className="recipe-list-item pb-3"
                onClick={() => {
                    navigate(`/recipes/${recipe._id}`, {state: {recipe}})
                }}
            >
            {recipe.name}
            </li>) : null }
        </ul>
        
    )
}

export default RecipeList
