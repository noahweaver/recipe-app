import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


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
    <>
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
  {/* change to icons */}
  <Button onClick={() => props.setAddingStep(false)}>Cancel</Button>
  <Button onClick={() => addStep()}>Submit</Button>
  </>
  )
}

export default AddStep