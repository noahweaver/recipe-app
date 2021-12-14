import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Search() {

    //state
    const [search, setSearch] = useState({search: ""})
    //state -> is rendering list? if not push footer to bottom (check jokes app)
    
    
    //handlechange
    function handleChange(e){
        console.log("handleChange")
        const {name, value} = e.target
        setSearch( {[name]: value} )
    }

    //submit search
        //store in context

    return (
        <div>
            <h1>SEARCH</h1>
            <Form className="container w-35p">
                <Form.Group className="mb-3">
                    <Form.Label>Search For A Recipe</Form.Label>
                    <Form.Control
                        name="search" 
                        type="text" 
                        placeholder="Search"
                        onChange={handleChange}
                        value={search.search}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type="submit" className="btn btn-secondary">Submit</Button>
            </Form>
            
            {/* list of recipes */}
                {/* map over list */}
                {/* each recipe is hyperlinked to dashboard with that info */}
            
        </div>
    )
}

export default Search
