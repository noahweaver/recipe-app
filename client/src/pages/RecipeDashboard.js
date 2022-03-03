import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function RecipeDashboard( props ) {
    
    const [singleRecipe, setSingleRecipe] = useState({})
    const { recipeId } = useParams()
    

    useEffect(() => {
        getSingleRecipe()
    }, [])

    function getSingleRecipe(){
        axios.get(`/recipes/${recipeId}`)
            .then(res => setSingleRecipe(...res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
        {singleRecipe ?
            <Card style={{ width: '50%' }} className="text-c    enter bg-dough text-almost-black mx-auto p-5 m-5">
                <Card.Img className="mx-auto mt-3 rounded" variant="top" src={singleRecipe.imgUrl} style={{ width: "250px" }}/>
                <Card.Body>
                    <Card.Title as="h2" className="font-khand display-6 fw-bold">{singleRecipe.name}</Card.Title>
                    <Card.Subtitle>{singleRecipe.type}</Card.Subtitle>
                    <Card.Text><b>Required Ingredients:</b> {singleRecipe.ingredients}</Card.Text>
                    <Card.Text><b>Directions:</b> {singleRecipe.directions}</Card.Text>
                    <Card.Text><b>Author:</b> <a href={singleRecipe.author}>{singleRecipe.author}</a></Card.Text>
                </Card.Body>
            </Card> : null}
        </div>
    )
}

export default RecipeDashboard
