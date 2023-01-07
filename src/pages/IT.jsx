import React from 'react'
import Sidebar from '../components/Sidebar'
import ITServices from '../components/ITServices';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import itvideo from '../assets/itcover.mp4';

const IT = () => {
    return (
        <div>
            <Sidebar />
            <Loader title={"Tawakkul IT & Marketing"} video={itvideo}/>
            <ITServices/>
            <Contact />
            <Footer />
        </div>
    )
}

export default IT