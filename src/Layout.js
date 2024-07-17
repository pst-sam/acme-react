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
        <body className='dark:bg-black dark:text-white'>
            <Header />
            <Outlet />
            <Footer />
        </body>
    )
}

export default Layout