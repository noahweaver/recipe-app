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
      <Button 
        className="btn btn-primary w-10p mx-2 mt-4 h-50" 
        onClick={() => { setEditing(true); }}
      >
          Edit #{props.index + 1}
      </Button>
      </Row>
      :
      <IngredientForm
        index={props.index}
        editing={editing}
        setEditing={setEditing}
        ingredient={props.ingredient}
        recipe={props.recipe}
        setRecipe={props.setRecipe}

      />
      }
    </>
  )
}

export default Ingredient