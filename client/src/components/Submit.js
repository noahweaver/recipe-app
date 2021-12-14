import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Context } from '../Context'


function Submit(props) {

    const {submitRecipe}  = useContext(Context)

    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
        imgUrl: "",
        type: "",
        origin: "",
        totalTime:  "",
        prepTime: "",
        cookTime: "",
        description: "",
        ingredients: "",
        directions: "",
        notes: ""
    })
    const [submitToggle, setSubmitToggle] = useState(false)

    //context
    //POST request
    function handleSubmit(e){
        e.preventDefault()
        console.log("handlesubmit was called")
        submitRecipe()
        setSubmitToggle(true)
        //reset state
    }
    function handleChange(){
        console.log("handlechange")
    }

    return (
        <div>
            {!submitToggle ? 
                <>
                <h1>SUBMIT</h1>
                <Form className="container" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Recipe Name"
                            value={inputs.name}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" className="btn btn-secondary">Submit Recipe</Button>
                </Form>
                </>
                :
                <>
                <h1>Thank you for your submission!</h1>
                <h5>Submit Another?</h5>
                <button className="btn btn-secondary" onClick={() => window.location.reload()}>Yes!</button>
                </>
            }
        </div>
    )
}

export default Submit
