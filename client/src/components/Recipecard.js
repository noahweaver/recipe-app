import React, {useContext} from 'react'
import {Context} from '../Context'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RecipeCard(props) {

    const {featuredRecipe} = useContext(Context)

    return (
        <Card style={{ width: '35%' }} className="text-center bg-dough text-almost-black mx-10p">
            <Card.Header as='h1'>Featured Recipe</Card.Header>
            <Card.Img className="mx-auto mt-3" variant="top" src={featuredRecipe.imgUrl} style={{ width: "200px" }}/>
            <Card.Body>
                <Card.Title as="h2">{featuredRecipe.name}</Card.Title>
                <Card.Subtitle>{featuredRecipe.type}</Card.Subtitle>
                <Card.Text><b>Required Ingredients:</b> {featuredRecipe.ingredients}</Card.Text>
                <Card.Text><b>Directions:</b> {featuredRecipe.directions}</Card.Text>
                <Card.Text><b>Author:</b> <a href={featuredRecipe.author}>{featuredRecipe.author}</a></Card.Text>
                {/* Button to navigate to recipe dashboard */} 
                <Button type='button' className="btn btn-secondary">Go To Recipe Dashboard</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard
