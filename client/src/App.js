import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Search from './components/Search'
import Submit from './components/Submit'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="search" element={<Search />}/>
                    <Route path="submit-recipe" element={<Submit />}/>
                </Route>
                {/* not found path */}
            </Routes>
        </>
    )
}

export default App
