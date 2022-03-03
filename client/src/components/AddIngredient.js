import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    <>
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
    {/* Change to icons */}
    <Button onClick={() => props.setAddingIngredient(false)}>Cancel</Button>
    <Button onClick={() => addIngredient()}>Submit</Button>
  </>
  )
}

export default AddIngredient