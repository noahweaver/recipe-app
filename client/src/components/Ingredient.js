import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IngredientForm from './IngredientForm'


function Ingredient(props) {

  const [editing, setEditing] = useState(false)

  return (
    <>
      {!editing ?
      <Row>
      <Col>
      <Form.Group controlId="ingredients">
        <Form.Label>Ingredient</Form.Label>
        <Form.Control
          name="ingredient"
          type="text"
          placeholder="Ingredient"
          value={props.ingredient.ingredient}
          // onChange={handleChange}
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
          value={props.ingredient.amount}
          // onChange={handleChange}
          className="mb-3"
          required
        >
        </Form.Control>
      </Form.Group>
      </Col>
      <Button type="button" class="btn btn-primary h-50" onClick={() => {props.removeIngredient(props.ingredient)}} style={{ width: "50px", height: "40px", marginTop: "25px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
        </svg>
      </Button>
      <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => { setEditing(true); }}>Edit #{props.index + 1}</Button>
      </Row>
      :
      <IngredientForm
        index={props.index}
        editing={editing}
        setEditing={setEditing}
        ingredient={props.ingredient}
        recipe={props.recipe}
        setRecipe={props.setRecipe}
        setInputs={props.setInputs}
        setAddingIngredient={props.setAddingIngredient}
      />
      }
    </>
  )
}

export default Ingredient