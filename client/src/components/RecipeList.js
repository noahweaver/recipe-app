import React, {useContext} from 'react'
import{Context} from '../Context'
import {Link} from 'react-router-dom'


function RecipeList(props) {

    const {recipesList} = useContext(Context)

    return (
        <ul>
            {recipesList ? recipesList.map(recipe => 
            <li recipe={recipe} key={recipe._id}>
                <Link className="nav-link" aria-current="page" to="/recipes/recipeId" >{recipe.name}</Link>
                {/* link leads to dashboard for each specific recipe */}
            </li>) : null }
        </ul>
        
    )
}

export default RecipeList
