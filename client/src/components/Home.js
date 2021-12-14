import React from 'react'
import RecipeCard from './Recipecard'

function Home(props) {
    return (
        <div className="container-fluid d-flex flex-row justify-content-evenly p-5 mb-5">
            <RecipeCard />
            
            <div className="w-35p pt-5">
                <h1>HOME PAGE</h1>
            <p>contentcontentcontentcontentcontent</p>
            <p>contentcontentcontentcontentcontent</p>
            <p>contentcontentcontentcontentcontent</p>
            </div>
            
        </div>
    )
}

export default Home
