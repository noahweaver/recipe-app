import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
    return (
        <div className="layout h-100 d-flex flex-column">
            <Navbar /> 
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
