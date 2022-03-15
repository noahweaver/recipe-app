import React, {useState, useContext} from 'react'
import { Context } from '../context/Context'
import IngredientForm from '../components/IngredientForm'
import Ingredient from '../components/Ingredient'
import Step from '../components/Step'
import StepForm from '../components/StepForm'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
        ingredients: [],
        directions: [],
        notes: ""
    })
    const [submitToggle, setSubmitToggle] = useState(false)
    const [addingIngredient, setAddingIngredient] = useState(false)
    const [addingStep, setAddingStep] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        console.log("handlesubmit was called")
        submitRecipe(inputs)
        setSubmitToggle(true)
        //reset state
    }

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleIngredients(ingredient){
        console.log("handleIngredients was called")
        setInputs(prevInputs => ({
            ...prevInputs,
            ingredients: [...prevInputs.ingredients, ingredient]
        }))
    }

    function handleSteps(step){
        console.log("handleSteps was called")
        setInputs(prevInputs => ({
            ...prevInputs,
            directions: [...prevInputs.directions, step]
        }))

    }

    return (
        <div>
            {!submitToggle ? 
                <>
                <h1 className="text-center font-khand display-6">SUBMIT</h1>
                <Container fluid>
                <Form className="container" onSubmit={handleSubmit}>
                    <Row>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    </Row>
                    <Row>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    </Row>
                    <Row>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    </Row>
                    <Row>
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
                    </Row>
                    <Row>
                    {inputs.ingredients.map((ingredient, index) => 
                        <Ingredient 
                            key={index} 
                            index={index} 
                            ingredient={ingredient}
                            recipe={inputs}
                            setRecipe={setInputs}
                        />
                    )}
                    {!addingIngredient ? 
                    <Button className="btn btn-primary w-15p mb-3" onClick={() => setAddingIngredient(true)}>Add Ingredient</Button>
                    :
                    <IngredientForm
                        recipe={inputs}
                        handleIngredients={handleIngredients}
                        setAddingIngredient={setAddingIngredient}
                    />
                    } 
                    </Row>
                    <Row>
                        {/* map of steps in numbered list */}
                    {inputs.directions.map((step, index) => 
                        <Step 
                            key={index}
                            index={index}
                            step={step}
                            recipe={inputs}
                            setRecipe={setInputs}
                        />
                    )}
                    {!addingStep ?
                    <Button className="btn btn-primary w-15p mb-3" onClick={() => setAddingStep(true)}>Add Step</Button>
                    :
                    <StepForm 
                        recipe={inputs}
                        setAddingStep={setAddingStep}
                        handleSteps={handleSteps}
                    />
                    }
                    </Row>
                    <Row>
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
                    </Row>
                    <Row>
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
                    </Row>
                    {/*add image upload */}
                    <Button type="submit" className="btn btn-primary">Submit Recipe</Button>
                </Form>
                </Container>
                </>
                :
                <>
                <h1>Thank you for your submission!</h1>
                <h5>Submit Another?</h5>
                <button className="btn btn-primary" onClick={() => window.location.reload()}>Yes!</button>
                </>
            }
        </div>
    )
}

export default Submit
