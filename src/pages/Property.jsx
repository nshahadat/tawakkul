import React from 'react'
import Sidebar from '../components/Sidebar'
import Loader from '../components/Loader';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import propertyvideo from '../assets/propertycover.mp4'
const Property = () => {
    return (
        <div>
            <Sidebar />
            <Loader title={"Tawakkul Property Solutions"} video={propertyvideo}/>
            <Contact />
            <Footer />
        </div>
    )
}

export default Property