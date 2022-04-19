import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function RecipeDashboard(props) {
    
    const [singleRecipe, setSingleRecipe] = useState()
    const { recipeId } = useParams()

    useEffect(() => {
        axios.get(`/recipes/${recipeId}`)
            .then(res => setSingleRecipe(...res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
        {singleRecipe ?
        <Card style={{ width: '50%', height: '73vh' }} className="bg-dough text-almost-black mx-auto p-5 m-5 d-flex overflow-auto">
            <Card.Img className="mx-auto mt-3 rounded" variant="top" src={singleRecipe.imgUrl} style={{ width: "250px" }}/>
            <Card.Body>
                <Card.Img className="mx-auto mt-3 rounded" variant="top" src={singleRecipe.imgUrl} style={{ width: "200px" }}/>
                <Card.Title as="h1" className="font-khand fw-bold ">{singleRecipe.name}</Card.Title>
                <Card.Subtitle><b>AKA:</b> {singleRecipe.nickname}</Card.Subtitle>
                <Card.Subtitle><b>Type:</b> {singleRecipe.type}</Card.Subtitle>
                <Card.Subtitle><b>Origin:</b> {singleRecipe.origin}</Card.Subtitle>
                <Card.Subtitle><b>Servings:</b> {singleRecipe.servings}</Card.Subtitle>
                <Card.Subtitle><b>Calories:</b> {singleRecipe.calories}</Card.Subtitle>
                <Card.Subtitle><b>Prep Time:</b> {singleRecipe.prepTime}</Card.Subtitle>
                <Card.Subtitle><b>Cook Time:</b> {singleRecipe.cookTime}</Card.Subtitle>
                <Card.Subtitle><b>Total Time:</b> {singleRecipe.totalTime}</Card.Subtitle>
                <Card.Text><b className="h5">Directions: </b>
                <br />
                {singleRecipe.description}
                </Card.Text>
                {singleRecipe && singleRecipe.ingredients ?
                <ul className="list-unstyled">
                    <Card.Text><b className="h5">Required Ingredients:</b> {singleRecipe.ingredients.map((ingredient, index) => 
                        <li key={index}>{ingredient.ingredient}, {ingredient.amount}</li>
                    )}</Card.Text>
                </ul>
                : null }
                {singleRecipe && singleRecipe.directions ? 
                <ol>                    
                    <Card.Text><b className="h5">Directions:</b> {singleRecipe.directions.map((step, index) => 
                         <li key={index}>{step}</li>
                    )}</Card.Text>
                </ol>
                : null }
                <Card.Text><b className="h5">Author:</b> <a href={singleRecipe.author}>{singleRecipe.author}</a></Card.Text>
            </Card.Body>
        </Card> 
        : null
        }
        </div>
    )
}

export default RecipeDashboard
