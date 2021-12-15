import React, {useContext} from 'react'
import {Context} from '../Context'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Home(props) {

    const {featuredRecipe} = useContext(Context)

    return (
        <div className="container-fluid d-flex flex-row justify-content-evenly p-5 mb-5">

                <Card style={{ width: '38%' }} className="text-center bg-dough text-almost-black mx-10p">
                <Card.Header as='h1'>Featured Recipe</Card.Header>
                <Card.Img className="mx-auto mt-3 rounded" variant="top" src={featuredRecipe.imgUrl} style={{ width: "200px" }}/>
                <Card.Body>
                    <Card.Title as="h2">{featuredRecipe.name}</Card.Title>
                    <Card.Subtitle>{featuredRecipe.type}</Card.Subtitle>
                    <Card.Text><b>Required Ingredients:</b> {featuredRecipe.ingredients}</Card.Text>
                    <Card.Text><b>Directions:</b> {featuredRecipe.directions}</Card.Text>
                    <Card.Text><b>Author:</b> <a href={featuredRecipe.author}>{featuredRecipe.author}</a></Card.Text>
                </Card.Body>
                </Card>
            
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
