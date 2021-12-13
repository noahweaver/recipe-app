import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider(props) {

//state
//functions
//axios requests
//useEffect

    return (
        <Context.Provider
            value={{

            }}
        > 
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
