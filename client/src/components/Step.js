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
    <Button type="button" class="btn btn-primary mx-auto" onClick={() => {props.removeStep(props.step)}} style={{ width: "50px", height: "40px", marginTop: "25px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg>
    </Button>
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
      setInputs={props.setInputs}
      setAddingStep={props.setAddingStep}
    />
    }
    </>
  )
}

export default Step