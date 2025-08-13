import React from 'react'
import Home from '../Pages/Home'
import Gallery from '../Pages/Gallery'
import Places from '../Pages/Places'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import NotFound from '../Pages/NotFound'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import LogIn from '../Pages/LogIn'
import { createBrowserRouter } from 'react-router-dom'

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    },
    {
        path: '/gallery',
        element: <div>
            <Navbar />
            <Gallery />
            <Footer />
        </div>
    },
    {
        path: '/places',
        element: <div>
            <Navbar />
            <Places />
            <Footer />
        </div>
    },
    {
        path: '/about',
        element: <div>
            <Navbar />
            <About />
            <Footer />
        </div>
    },
    {
        path: '/contact',
        element: <div>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    },
    {
        path: '/login',
        element: <div>
            <LogIn/>
            <Footer />
        </div>
    },
    {
        path: '*',
        element: <div>
            <Navbar />
            <NotFound />
            <Footer />
        </div>
    }
])


export default AppRoutes
