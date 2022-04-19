import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function IngredientForm(props) {

  const initInput = {
    ingredient: "",
    amount: ""
  }

  const [ingredient, setIngredient] = useState(initInput)

  useEffect(() => {
    if (props.ingredient) {
      setIngredient(props.ingredient)
    }
  }, [])

  function handleChange(e){
    const {name, value} = e.target
    setIngredient(prevInputs => ({...prevInputs, [name]: value}))
  }

  function addIngredient(){
    console.log("addIngredient was called")
    if (!props.editing) {
      props.handleIngredients(ingredient)
      props.setAddingIngredient(false)
    }
    if (props.editing) {
      const newIngredients = props.recipe.ingredients.splice(props.index, 1, ingredient)
      console.log("newIngredients", newIngredients)
      props.setRecipe(prevState => ({
        ...prevState, ingredient
      }))
      props.setEditing(false)
    }
  }

  function handleCancel(){
    props.setAddingIngredient(false); 
    props.setEditing(false); 
    setIngredient(initInput);
  }

  return (
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
    <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => { handleCancel(); }}>Cancel</Button>
    <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => { addIngredient(); }}>Submit</Button>
  </Row>
  )
}

export default IngredientForm