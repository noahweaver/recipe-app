import React, { useState } from 'react'
import StepForm from './StepForm'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Step(props) {

  const [editing, setEditing] = useState(false)

  return (
    <>
    {!editing ? 
    <Row>
    <Col>
        <Form.Group>
            <Form.Label>Step {props.index + 1}</Form.Label>
            <Form.Control
              name="step"
              type="text"
              value={props.step}
              className="mb-3"
              required
            >
            </Form.Control>
        </Form.Group>
    </Col>
    <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => { setEditing(true); }}>Edit Step {props.index +1}</Button>
    </Row> 
    :
    <StepForm 
      index={props.index}
      step={props.step}
      editing={editing}
      setEditing={setEditing}
      recipe={props.recipe}
      setRecipe={props.setRecipe}
    />
    }
    </>
  )
}

export default Step