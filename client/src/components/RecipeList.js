import React, {useContext} from 'react'
import{Context} from '../context/Context'
import {useNavigate} from 'react-router-dom'


function RecipeList(props) {

    const navigate = useNavigate()
    const {recipesList} = useContext(Context)

    return (
        <ul className="min-h-50vh recipe-list">
            {recipesList ? recipesList.map(recipe => 
            <li className="recipe-list-item pb-3 cursor"
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
