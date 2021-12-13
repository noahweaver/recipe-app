import React from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
