import React, {useContext} from 'react'
import {Context} from '../Context'
import RecipeList from './RecipeList'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Search() {

    const {searchField, setSearchField, getSearchedRecipes, recipesList} = useContext(Context)

    //submit search
        //store in context
      //handlechange
      function handleSearch(e){
        console.log("handleChange")
        const {name, value} = e.target
        setSearchField( {[name]: value} )
        getSearchedRecipes()
    }


    return (

        

        <div>
            <Form className="container w-35p bg-almost-black p-3 rounded">
                <Form.Group className="mb-3">
                    <Form.Label className="display-6">Search For A Recipe</Form.Label>
                    <Form.Control
                        name="search" 
                        type="text" 
                        placeholder="Search"
                        onChange={handleSearch}
                        value={searchField.search}>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" className="btn btn-secondary">Submit</Button>
            </Form>
            <div className="container w-35p p-5 my-3 bg-grey-transparent5 rounded">
                <RecipeList />
            </div>
            {/* list of recipes */}
                {/* map over list */}
                {/* each recipe is hyperlinked to dashboard with that info */}
        </div>
    )
}

export default Search
