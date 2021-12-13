import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Context = React.createContext()

function ContextProvider(props) {
//state
    const [featuredRecipe, setFeaturedRecipe] = useState({})

useEffect(() => {
    getFeaturedRecipe()
}, [])

//axios requests
    function getFeaturedRecipe(){
        axios.get('/recipes/featured')
            .then(res => setFeaturedRecipe(res.data))
            .catch(err => console.log(err))
    }

//functions


    return (
        <Context.Provider
            value={{
                featuredRecipe,
            }}
        > 
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
