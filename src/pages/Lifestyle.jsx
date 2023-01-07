import React from 'react'
import Sidebar from '../components/Sidebar'
import Loader from '../components/Loader';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import lifevideo from '../assets/lifestylecover.mp4'

const Lifestyle = () => {
    return (
        <>
        <Sidebar/>
        <Loader title={"Tawakkul Lifestyle"} video={lifevideo}/>
        <Contact />
        <Footer />
        </>
    )
}

export default Lifestyle