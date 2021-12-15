import React, {useContext} from 'react'
import{Context} from '../Context'
import {Link, useNavigate, useLocation} from 'react-router-dom'


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
            {/* {recipesList ? recipesList.map(recipe => 
            <li className="recipe-list-item pb-3"
                recipe={recipe} 
                key={recipe._id}>
                <Link className="black-text" 
                    aria-current="page" 
                    to={`/recipes/${recipe._id}`}>{recipe.name}
                </Link>
            </li>) : null } */}
        </ul>
        
    )
}

export default RecipeList
