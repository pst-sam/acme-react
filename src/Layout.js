import React, { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout