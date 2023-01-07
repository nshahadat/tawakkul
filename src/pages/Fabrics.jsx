import React from 'react'
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import fabricsvideo from '../assets/fabricscover.mp4'

const Fabrics = () => {

    return (
        <>
            <Sidebar />
            <Loader title={"Tawakkul Fabrics"} video={fabricsvideo} />
            <Contact />
            <Footer />
        </>
    )
}

export default Fabrics