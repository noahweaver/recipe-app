import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function AddIngredient(props) {

  const initInput = {
    ingredient: "",
    amount: ""
  }

  const [ingredient, setIngredient] = useState(initInput)

  function handleChange(e){
    const {name, value} = e.target
    setIngredient(prevInputs => ({...prevInputs, [name]: value}))
  }

  function addIngredient(){
    console.log("addIngredient was called")
    props.handleIngredients(ingredient)
    props.setAddingIngredient(false)
  }

  return (
    // Form fields should be in same line and not on top of each other
    <Row>
    <Col>
    <Form.Group controlId="ingredients">
      <Form.Label>Ingredient</Form.Label>
      <Form.Control
        name="ingredient"
        type="text"
        placeholder="Ingredient"
        value={ingredient.ingredient}
        onChange={handleChange}
        className="mb-3"
        required
      >
      </Form.Control>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group>
      <Form.Label>Amount</Form.Label>
      <Form.Control
        name="amount"
        type="text"
        placeholder="Amount"
        value={ingredient.amount}
        onChange={handleChange}
        className="mb-3"
        required
      >
      </Form.Control>
    </Form.Group>
    </Col>
    {/* Change to icons */}
    <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => props.setAddingIngredient(false)}>Cancel</Button>
    <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => addIngredient()}>Submit</Button>
  </Row>
  )
}

export default AddIngredient