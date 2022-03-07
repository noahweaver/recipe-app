import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function AddStep(props) {

  const [step, setStep] = useState("")

  // function handleChange(e){
  //   const {name, value} = e.target
  //   setStep(e.target.value)
  // }

  function addStep(){
    console.log("addStep was called")
    props.handleSteps(step)
    props.setAddingStep(false)
  }

  return (
    <Row>
    <Col>
    <Form.Group controlId="directions">
      <Form.Label>Add Step</Form.Label>
      <Form.Control
          name="step"
          type="text"
          placeholder="Step"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          className="mb-3"
          required
          >
      </Form.Control>
  </Form.Group>
  </Col>
  {/* change to icons */}
  <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => props.setAddingStep(false)}>Cancel</Button>
  <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => addStep()}>Submit</Button>
  </Row>
  )
}

export default AddStep