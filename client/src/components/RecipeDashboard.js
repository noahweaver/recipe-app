import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link, useNavigate, useLocation} from 'react-router-dom'


function RecipeDashboard(props) {
    
    const location = useLocation()
    const navdata = location.state.recipe

    return (
        <div className="container">
            <Card style={{ width: '38%' }} className="text-center bg-dough text-almost-black mx-10p">
                <Card.Img className="mx-auto mt-3 rounded" variant="top" src={navdata.imgUrl} style={{ width: "200px" }}/>
                <Card.Body>
                    <Card.Title as="h2">{navdata.name}</Card.Title>
                    <Card.Subtitle>{navdata.type}</Card.Subtitle>
                    <Card.Text><b>Required Ingredients:</b> {navdata.ingredients}</Card.Text>
                    <Card.Text><b>Directions:</b> {navdata.directions}</Card.Text>
                    <Card.Text><b>Author:</b> <a href={navdata.author}>{navdata.author}</a></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecipeDashboard
