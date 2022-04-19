import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StepForm(props) {

  const [step, setStep] = useState("")

  useEffect(() => {
    if (props.step) {
      setStep(props.step)
    }
  }, [])

  // function handleChange(e){
  //   const {name, value} = e.target
  //   setStep(prevState => ({...prevState, [name]: value }))
  // }

  function addStep(){
    console.log("addStep was called")
    if (!props.editing){
      props.handleSteps(step)
      props.setAddingStep(false)
    } else {
      const index = props.index
      const newDirections = props.recipe.directions.splice(index, 1, step)
      console.log("newDirections", newDirections)

      props.setRecipe(prevState => ({
        ...prevState, step
      }))
      props.setEditing(false)
    }
  }

  function handleCancel(){
    props.setAddingStep(false); 
    props.setEditing(false); 
    setStep("");
  }

  return (
    <Row>
    <Col>
    <Form.Group controlId="directions">
      <Form.Label>{props.editing ? "Edit Step" : "Add Step"}</Form.Label>
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
  <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => { handleCancel()}}>Cancel</Button>
  <Button className="btn btn-primary w-10p mx-2 mt-4 h-50" onClick={() => addStep()}>Submit</Button>
  </Row>
  )
}

export default StepForm