import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Context } from '../Context'


function Submit(props) {

    const {submitRecipe}  = useContext(Context)

    const [inputs, setInputs] = useState({
        name: "",
        author: "",
        nickname: "",
        imgUrl: "",
        type: "",
        origin: "",
        totalTime:  "",
        prepTime: "",
        servings: "",
        calories: "",
        cookTime: "",
        description: "",
        ingredients: "",
        directions: "",
        notes: ""
    })
    const [submitToggle, setSubmitToggle] = useState(false)

    //functions from slack chat with Nicholas Black and Eric
    //from Nicholas
//     const TEXT = "1. Reserve 1 Tbsp. cookie crumbs. Mix cream cheese and remaining crumbs until well blended. Shape into 42 (1-inch) balls. Refrigerate 30 min. 2. Melt chocolate as directed on package. Dip balls in chocolate; place on parchment or waxed paper-covered baking sheet. Sprinkle with reserved crumbs. 3. Refrigerate 1 hour or until firm."
// const parsed_steps = []
// for(
//         let text_to_process = TEXT, i = 1
//         ; text_to_process.length > 0 && i < 1000
//         ; i++
//     ){
//     let [separated_step, leftovers] = pullNextStepFrom(text_to_process, i)
//     text_to_process = leftovers
//     parsed_steps.push(separated_step)
// }

// console.log(parsed_steps)

// function pullNextStepFrom(text, expected_step_number){
    
//     if(text.length <= 0)
//         return ["",""]

//     const start = `${expected_step_number}.`
//     const end = `${expected_step_number + 1}.`

//     const start_position = text.indexOf(start)
//     let end_position = text.indexOf(end) 

//     if(end_position === -1)
//         end_position = text.length
    
//     return [
//         text.slice(start_position + start.length, end_position).trim(),
//         text.slice(end_position, text.length).trim()
//     ]
// }

//from Eric
// const [steps, setSteps] = useState([{number: 1, text:""}])

// addStep(){
//    setSteps(prev => [...prev, {number:prev.length, text:""}])
// }

// handleChangeOfStep(e, number){
//    setSteps(prev => prev.map(step => step.number === number ? {number, text: e.target.value} : step))
// }

// const stepsList = steps.map(step => (
//  <input value={step.text} onChange={e=>handleChangeOfStep(e, step.number)}/>
// ))

//simplified state using i
// const [steps, setSteps] = useState([""])
// const stepsList = steps.map((step, i) => (
//     <input value={step.text} onChange={e=>handleChangeOfStep(e, i)}/>
//    ))


//     //context
    //POST request
    function handleSubmit(e){
        e.preventDefault()
        console.log("handlesubmit was called")
        submitRecipe(inputs)
        setSubmitToggle(true)
        //reset state
    }
    function handleChange(e){
        console.log("handlechange")
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    return (
        <div>
            {!submitToggle ? 
                <>
                <h1 className="text-center">SUBMIT</h1>
                <Form className="container" onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Recipe Name"
                            value={inputs.name}
                            onChange={handleChange}
                            className="mb-3"
                            required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="author">
                        <Form.Label>Recipe Author</Form.Label>
                        <Form.Control
                            name="author"
                            type="text"
                            placeholder="Use your name or a link to your recipe page"
                            value={inputs.author}
                            onChange={handleChange}
                            className="mb-3"
                            required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="nickname">
                        <Form.Label>Is your recipe known by another name?</Form.Label>
                        <Form.Control
                            name="nickname"
                            type="text"
                            placeholder="Nickname"
                            value={inputs.nickname}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="imgUrl">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            name="imgUrl"
                            type="text"
                            placeholder="URL"
                            value={inputs.imgUrl}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    {/*add image upload */}
                    <Form.Group controlId="type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            name="type"
                            type="text"
                            placeholder="(ex. Pasta, Dessert, Appetizer, Misc, etc.)"
                            value={inputs.type}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="origin">
                        <Form.Label>Recipe Origin</Form.Label>
                        <Form.Control
                            name="origin"
                            type="text"
                            placeholder="(ex. Italian, Chinese, My Kitchen)"
                            value={inputs.origin}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="servings">
                        <Form.Label>Servings</Form.Label>
                        <Form.Control
                            name="servings"
                            type="number"
                            placeholder="How many people will this recipe feed?"
                            value={inputs.servings}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="calories">
                        <Form.Label>Calories</Form.Label>
                        <Form.Control
                            name="calories"
                            type="number"
                            placeholder="How many calories are in this recipe?"
                            value={inputs.calories}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="totalTime">
                        <Form.Label>Total Time</Form.Label>
                        <Form.Control
                            name="totalTime"
                            type="text"
                            placeholder="(Prep Time + Cook Time)"
                            value={inputs.totalTime}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="prepTime">
                        <Form.Label>Prep Time</Form.Label>
                        <Form.Control
                            name="prepTime"
                            type="text"
                            placeholder="Prep Time"
                            value={inputs.prepTime}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="cookTime">
                        <Form.Label>Cook Time</Form.Label>
                        <Form.Control
                            name="cookTime"
                            type="text"
                            placeholder="Cook Time"
                            value={inputs.cookTime}
                            onChange={handleChange}
                            className="mb-3"
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea" rows={3}
                            name="description"
                            type="text"
                            placeholder="Recipe Description"
                            value={inputs.description}
                            onChange={handleChange}
                            className="mb-3">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ingredients">
                        <Form.Label>Recipe ingredients</Form.Label>
                        <Form.Control
                            as="textarea" rows={5}
                            name="ingredients"
                            type="text"
                            placeholder="Ingredients"
                            value={inputs.ingredients}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="directions">
                        <Form.Label>Directions</Form.Label>
                        <Form.Control
                            as="textarea" rows={10}
                            name="directions"
                            type="text"
                            placeholder="Recipe Directions"
                            value={inputs.directions}
                            onChange={handleChange}
                            className="mb-3"
                            required
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="notes">
                        <Form.Label>Is there anything else you would like to add?</Form.Label>
                        <Form.Control
                            as="textarea" rows={3}
                            name="notes"
                            type="text"
                            placeholder="Notes"
                            value={inputs.notes}
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
