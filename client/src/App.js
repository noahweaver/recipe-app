import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Search from './pages/Search'
import RecipeDashboard from './pages/RecipeDashboard'
import Submit from './pages/Submit'
import NotFound from './pages/NotFound'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="search" element={<Search />}>
                        <Route index element={<Search />}/>
                    </Route>
                    <Route path='/recipes' element={<RecipeDashboard />}>
                        <Route index element={<RecipeDashboard />}/>
                        <Route path=":recipeId" element={<RecipeDashboard/>}/>
                    </Route>
                    <Route path="submit-recipe" element={<Submit />}>
                        <Route index element={<Submit />}/>
                        <Route path=":submitted" element={<Submit />}>
                    </Route>
                </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
