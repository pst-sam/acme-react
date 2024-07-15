import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    useEffect(() => {
        toggleMenu();
    }, [])
    const toggleMenu = () => {
        const hamburgerBtn = document.getElementById('hamburger-button')
        const mobileMenu = document.getElementById('mobile-menu')

        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }


    return (
        <header className="bg-teal-700 text-white sticky top-0 z-10">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium">
                    <Link to={'/'}>🚀Acme Rockets</Link>
                </h1>
                <div>
                    <button onClick={toggleMenu}
                        id="hamburger-button"
                        className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
                    >
                        {/* <!-- &#9776; --> */}
                        <div
                            className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"
                        ></div>
                    </button>

                    <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
                        <Link to={'/rockets'}>Our Rockets</Link>
                        <Link to={'/testimonials'}>Testimonials</Link>
                        <Link to={'register'}>Register</Link>
                        <Link to={'/contact'}>Contact Us</Link>

                    </nav>
                </div>
            </section>
            <section onClick={toggleMenu}
                id="mobile-menu"
                className="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden"
            >
                {/* <!-- <button className="text-8xl self-end px-6">
                  &times;
              </button> --> */}
                <nav
                    className="flex flex-col min-h-screen items-center py-8"
                    aria-label="mobile"
                >
                    <Link to={'/'} className="w-full text-center py-6 hover:opacity-90">Home</Link>
                    <Link to={'/rockets'} className="w-full text-center py-6 hover:opacity-90">Our Rockets</Link>
                    <Link to={'/testimonials'} className="w-full text-center py-6 hover:opacity-90">Testimonials</Link>
                    <Link to={'/register'} className="w-full text-center py-6 hover:opacity-90">Register</Link>
                    <Link to={'/contact'} className="w-full text-center py-6 hover:opacity-90">Contact Us</Link>

                </nav>
            </section>
        </header>
    )
}

export default Header