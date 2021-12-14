import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Context } from '../Context'


function Submit(props) {

    const {submitRecipe}  = useContext(Context)

    const [inputs, setInputs] = useState({
        name: "",
        author: "",
        nickname: "",
        imgUrl: "",
        type: "",
        origin: "",
        totalTime:  "",
        prepTime: "",
        servings: "",
        calories: "",
        cookTime: "",
        description: "",
        ingredients: "",
        directions: "",
        notes: ""
    })
    const [submitToggle, setSubmitToggle] = useState(false)

    //context
    //POST request
    function handleSubmit(e){
        e.preventDefault()
        console.log("handlesubmit was called")
        submitRecipe(inputs)
        setSubmitToggle(true)
        //reset state
    }
    function handleChange(e){
        console.log("handlechange")
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    return (
        <div>
            {!submitToggle ? 
                <>
                <h1>SUBMIT</h1>
                <Form className="container" onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Recipe Name"
                            value={inputs.name}
                            onChange={handleChange}
                            className="mb-3"
                            required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="author">
                        <Form.Label>Recipe Author</Form.Label>
                        <Form.Control
                            name="author"
                            type="text"
                            placeholder="Use your name or a link to your recipe page"
                            value={inputs.author}
                            onChange={handleChange}
                            className="mb-3"
                            required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="nickname">
                        <Form.Label>Is your recipe known by another name?</Form.Label>
                        <Form.Control
                            name="nickname"
                            type="text"
                            placeholder="Nickname"
                            value={inputs.nickname}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="imgUrl">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            name="imgUrl"
                            type="text"
                            placeholder="URL"
                            value={inputs.imgUrl}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    {/*add image upload */}
                    <Form.Group controlId="type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            name="type"
                            type="text"
                            placeholder="(ex. Pasta, Dessert, Appetizer, Misc, etc.)"
                            value={inputs.type}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="origin">
                        <Form.Label>Recipe Origin</Form.Label>
                        <Form.Control
                            name="origin"
                            type="text"
                            placeholder="(ex. Italian, Chinese, My Kitchen)"
                            value={inputs.origin}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="servings">
                        <Form.Label>Servings</Form.Label>
                        <Form.Control
                            name="servings"
                            type="number"
                            placeholder="How many people will this recipe feed?"
                            value={inputs.servings}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="calories">
                        <Form.Label>Calories</Form.Label>
                        <Form.Control
                            name="calories"
                            type="number"
                            placeholder="How many calories are in this recipe?"
                            value={inputs.calories}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="totalTime">
                        <Form.Label>Total Time</Form.Label>
                        <Form.Control
                            name="totalTime"
                            type="text"
                            placeholder="(Prep Time + Cook Time)"
                            value={inputs.totalTime}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="prepTime">
                        <Form.Label>Prep Time</Form.Label>
                        <Form.Control
                            name="prepTime"
                            type="text"
                            placeholder="Prep Time"
                            value={inputs.prepTime}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="cookTime">
                        <Form.Label>Cook Time</Form.Label>
                        <Form.Control
                            name="cookTime"
                            type="text"
                            placeholder="Cook Time"
                            value={inputs.cookTime}
                            onChange={handleChange}
                            className="mb-3"
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea" rows={3}
                            name="description"
                            type="text"
                            placeholder="Recipe Description"
                            value={inputs.description}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ingredients">
                        <Form.Label>Recipe ingredients</Form.Label>
                        <Form.Control
                            as="textarea" rows={5}
                            name="ingredients"
                            type="text"
                            placeholder="Ingredients"
                            value={inputs.ingredients}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="directions">
                        <Form.Label>Directions</Form.Label>
                        <Form.Control
                            as="textarea" rows={10}
                            name="directions"
                            type="text"
                            placeholder="Recipe Directions"
                            value={inputs.directions}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="notes">
                        <Form.Label>Is there anything else you would like to add?</Form.Label>
                        <Form.Control
                            as="textarea" rows={3}
                            name="notes"
                            type="text"
                            placeholder="Notes"
                            value={inputs.notes}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" className="btn btn-secondary">Submit Recipe</Button>
                </Form>
                </>
                :
                <>
                <h1>Thank you for your submission!</h1>
                <h5>Submit Another?</h5>
                <button className="btn btn-secondary" onClick={() => window.location.reload()}>Yes!</button>
                </>
            }
        </div>
    )
}

export default Submit
