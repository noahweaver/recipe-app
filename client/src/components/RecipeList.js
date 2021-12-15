import React, {useContext} from 'react'
import{Context} from '../Context'
import {Link} from 'react-router-dom'


function RecipeList(props) {

    const {recipesList} = useContext(Context)

    return (
        <ul>
            {recipesList ? recipesList.map(recipe => 
            <li className="recipe-list-item pb-3"
                recipe={recipe} 
                key={recipe._id}>
                <Link className="black-text" 
                    aria-current="page" 
                    to={`/recipes/${recipe._id}`}>{recipe.name}
                </Link>
                {/* link leads to dashboard for each specific recipe */}
            </li>) : null }
        </ul>
        
    )
}

export default RecipeList
